const DEFAULT_TO_EMAIL = "sales@bullchassis.com";
const DEFAULT_FROM_EMAIL = "Bull Chassis <onboarding@resend.dev>";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "RESEND_API_KEY is not configured." });
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
    website = "",
  } = req.body || {};

  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!email || !phone) {
    return res.status(400).json({ error: locale === "es" ? "Email y teléfono son requeridos." : "Email and phone are required." });
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
      to: (process.env.RESEND_TO_EMAIL || DEFAULT_TO_EMAIL).split(",").map((item) => item.trim()).filter(Boolean),
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
