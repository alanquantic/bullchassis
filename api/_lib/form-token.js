import crypto from "node:crypto";

const FORM_SECRET = process.env.FORM_SECRET || "";
const MIN_AGE_MS = 3_000; // < 3 s = bot
const MAX_AGE_MS = 2 * 60 * 60 * 1000; // > 2 h = token vencido

function sign(value) {
  return crypto.createHmac("sha256", FORM_SECRET).update(value).digest("hex");
}

export function issueFormToken() {
  const ts = Date.now();
  if (!FORM_SECRET) return `${ts}.unsigned`; // degrada sin bloquear
  return `${ts}.${sign(String(ts))}`;
}

export function verifyFormToken(token) {
  if (!FORM_SECRET) return { valid: true, reason: "FORM_SECRET no configurado" };
  if (typeof token !== "string" || !token.includes(".")) {
    return { valid: false, reason: "token ausente o malformado" };
  }

  const [tsStr, sig] = token.split(".");
  const ts = Number(tsStr);
  if (!Number.isFinite(ts) || !sig) return { valid: false, reason: "malformado" };

  const expected = sign(tsStr);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  // Comparación en tiempo constante para no filtrar la firma.
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { valid: false, reason: "firma inválida" };
  }

  const age = Date.now() - ts;
  if (age < MIN_AGE_MS) return { valid: false, reason: `demasiado rápido (${age}ms)` };
  if (age > MAX_AGE_MS) return { valid: false, reason: "token vencido" };
  return { valid: true };
}
