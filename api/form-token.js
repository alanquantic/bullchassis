import { issueFormToken } from "./_lib/form-token.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed." });
  }

  // El token lleva su propia marca de tiempo: no debe cachearse.
  res.setHeader("Cache-Control", "no-store, max-age=0");
  return res.status(200).json({ token: issueFormToken() });
}
