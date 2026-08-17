import { verifyFormToken } from "./_lib/form-token.js";
import { validateContact } from "./_lib/validate-contact.js";
import { rateLimit } from "./_lib/rate-limit.js";

const DEFAULT_TO_EMAIL = "sales@bullchassis.com";
const DEFAULT_FROM_EMAIL = "Bull Chassis <onboarding@resend.dev>";

// Campo señuelo del honeypot. `website` se conserva por compatibilidad con
// formularios ya desplegados en caché del navegador.
const HONEYPOT_FIELDS = ["company_website", "website"];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Rechazo silencioso: mismo cuerpo de éxito que un envío real, para que el bot
// crea que funcionó y no reintente con otra estrategia.
function silentOk(res) {
  return res.status(200).json({ ok: true });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const {
    name = "",
    email = "",
    phone = "",
    company = "",
    message = "",
    locale = "en",
    page = "",
    formId = "",
    formToken = "",
  } = req.body || {};

  // ── Capa 4: detección pasiva (Vercel BotID) ──────────────────────────────
  // Import dinámico y envuelto: si el paquete o el servicio no está disponible
  // (p. ej. en local), no debe bloquear envíos legítimos.
  try {
    const { checkBotId } = await import("botid/server");
    const verification = await checkBotId();
    if (verification.isBot) {
      console.warn("[anti-spam] Descartado por BotID", { formId, page });
      return silentOk(res);
    }
  } catch (err) {
    console.warn("[anti-spam] checkBotId no disponible:", err?.message || err);
  }

  // ── Capa 1: honeypot ─────────────────────────────────────────────────────
  for (const field of HONEYPOT_FIELDS) {
    if ((req.body?.[field] ?? "").toString().trim() !== "") {
      console.warn(`[anti-spam] Descartado por honeypot (${field})`, { formId, page });
      return silentOk(res);
    }
  }

  // ── Capa 2: token de tiempo firmado ──────────────────────────────────────
  const token = verifyFormToken(formToken);
  if (!token.valid) {
    console.warn(`[anti-spam] Descartado por token: ${token.reason}`, { formId, page });
    return silentOk(res);
  }

  // ── Campos mínimos (error real de UX, no spam) ───────────────────────────
  if (!email || !phone) {
    return res.status(400).json({
      error:
        locale === "es"
          ? "Email y teléfono son requeridos."
          : "Email and phone are required.",
    });
  }

  // ── Capa 3: validación estricta ──────────────────────────────────────────
  const validation = validateContact({ name, email, phone, company, message });
  if (!validation.valid) {
    console.warn(`[anti-spam] Descartado por validación: ${validation.reason}`, {
      formId,
      page,
      payload: { name, email, phone, company, message },
    });
    return silentOk(res);
  }

  // ── Capa 5: rate limiting ────────────────────────────────────────────────
  if (!rateLimit(email.trim().toLowerCase()).allowed) {
    console.warn("[anti-spam] Descartado por rate limit", { email, formId });
    return silentOk(res);
  }

  // ── Envío ────────────────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "RESEND_API_KEY is not configured." });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeCompany = escapeHtml(company);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const safeLocale = escapeHtml(locale);
  const safePage = escapeHtml(page);
  const safeFormId = escapeHtml(formId);

  const html = `
    <h2>New Bull Chassis quote request</h2>
    <p><strong>Name:</strong> ${safeName || "N/A"}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Phone:</strong> ${safePhone}</p>
    <p><strong>Company:</strong> ${safeCompany || "N/A"}</p>
    <p><strong>Language:</strong> ${safeLocale}</p>
    <p><strong>Form:</strong> ${safeFormId}</p>
    <p><strong>Page:</strong> ${safePage || "N/A"}</p>
    <p><strong>Message:</strong><br />${safeMessage || "N/A"}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL,
      to: (process.env.RESEND_TO_EMAIL || DEFAULT_TO_EMAIL)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      reply_to: email,
      subject: `Bull Chassis quote request${name ? ` - ${name}` : ""}`,
      html,
    }),
  });

  const resendJson = await resendResponse.json().catch(() => null);

  if (!resendResponse.ok) {
    return res.status(502).json({
      error:
        resendJson?.message ||
        resendJson?.error ||
        "Resend could not process the request.",
    });
  }

  return res.status(200).json({ ok: true, id: resendJson?.id || null });
}
