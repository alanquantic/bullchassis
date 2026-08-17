import { useEffect, useState } from "react";

const REFRESH_MS = 45 * 60 * 1000; // refresca antes de las 2 h de vigencia

/**
 * Pide un token de tiempo firmado al montar el formulario y lo refresca antes
 * de que venza. Si el endpoint falla devuelve "" y el envío sigue su curso: la
 * validación real vive en el servidor.
 */
export function useFormToken() {
  const [token, setToken] = useState("");

  useEffect(() => {
    let cancelled = false;

    const load = () =>
      fetch("/api/form-token")
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (!cancelled && d?.token) setToken(d.token);
        })
        .catch(() => {});

    load();
    const id = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return token;
}
