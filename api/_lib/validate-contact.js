const VOWEL = /[aeiouáéíóúü]/i;
const CONSONANT_RUN = /[bcdfghjklmnpqrstvwxyzñ]{4,}/i;
const URL_OR_HTML = /https?:\/\/|\[url=|<a\s+href|<[a-z][^>]*>/i;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DISPOSABLE = [
  "mailinator.com",
  "tempmail",
  "guerrillamail",
  "10minutemail",
  "yopmail",
  "throwaway",
];

// Mayúsculas fuera de la 1ª letra de cada palabra en > 30% del total, SOLO en
// texto de caso mixto (no marca acrónimos legítimos como "ACME SA" o "DHL").
function hasAnomalousUppercase(value) {
  const letters = [...value].filter((c) => /\p{L}/u.test(c));
  if (!letters.length) return false;
  const hasLower = letters.some((c) => c === c.toLowerCase() && c !== c.toUpperCase());
  if (!hasLower) return false; // todo mayúsculas = acrónimo legítimo
  let interior = 0;
  for (const word of value.split(/\s+/).filter(Boolean)) {
    let first = false;
    for (const ch of word) {
      if (!/\p{L}/u.test(ch)) continue;
      const up = ch === ch.toUpperCase() && ch !== ch.toLowerCase();
      if (!first) first = true;
      else if (up) interior++;
    }
  }
  return interior / letters.length > 0.3;
}

function checkText(field, raw) {
  const v = raw.trim();
  if (v.length < 2 || v.length > 100) return `${field}: longitud`;
  if (!VOWEL.test(v)) return `${field}: sin vocales`;
  if (CONSONANT_RUN.test(v)) return `${field}: 4+ consonantes`;
  if (hasAnomalousUppercase(v)) return `${field}: mayúsculas anómalas`;
  if (URL_OR_HTML.test(v)) return `${field}: URL/HTML`;
  return null;
}

function checkEmail(raw) {
  const v = raw.trim().toLowerCase();
  if (!EMAIL_RE.test(v)) return "email: formato";
  if (v.length > 254) return "email: longitud";
  if (DISPOSABLE.some((d) => v.includes(d))) return "email: dominio desechable";
  return null;
}

function checkPhone(raw) {
  const d = raw.replace(/[\s\-().+]/g, "");
  if (!/^\d{10,15}$/.test(d)) return "phone: longitud";
  if (/^(\d)\1+$/.test(d)) return "phone: dígitos iguales";
  if (d === "1234567890" || d === "0987654321") return "phone: secuencia obvia";
  return null;
}

function checkFreeText(field, s) {
  if (s.length > 2000) return `${field}: muy largo`;
  const urls = (s.match(/https?:\/\/|www\./gi) || []).length;
  const tags = (s.match(/<[^>]+>|\[[^\]]+\]/g) || []).length;
  if (urls + tags > 2) return `${field}: demasiados enlaces`;
  return null;
}

/**
 * Valida el payload del formulario de contacto. Devuelve el primer motivo de
 * fallo encontrado. Solo evalúa los campos opcionales cuando vienen con valor.
 */
export function validateContact({ name = "", email = "", phone = "", company = "", message = "" }) {
  const reason =
    checkEmail(email) ||
    checkPhone(phone) ||
    (name.trim() ? checkText("name", name) : null) ||
    (company.trim() ? checkText("company", company) : null) ||
    (message.trim() ? checkFreeText("message", message) : null);

  return reason ? { valid: false, reason } : { valid: true };
}
