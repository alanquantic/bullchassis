const MAX = 3;
const WINDOW = 24 * 60 * 60 * 1000;

const hits = new Map();

// ⚠️ En serverless (Vercel Functions) este Map no se comparte de forma fiable
// entre invocaciones: es un stopgap que solo frena ráfagas dentro de una misma
// instancia caliente. Para rate limiting real usar Vercel KV / Upstash Redis.
export function rateLimit(key) {
  if (!key) return { allowed: true };
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW);
  if (recent.length >= MAX) {
    hits.set(key, recent);
    return { allowed: false };
  }
  recent.push(now);
  hits.set(key, recent);
  return { allowed: true };
}
