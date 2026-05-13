export const SITE_ORIGIN = String(import.meta.env.VITE_SITE_ORIGIN ?? "https://theottoni.com.br").replace(/\/$/, "");

export function norm(p) {
  if (!p || p === "/") return "/";
  return p.replace(/\/+$/, "") || "/";
}

export const NAV_ROUTES = Object.freeze([
  { path: "/", labelKey: "home", end: true, seoKey: "home" },
  { path: "/sobre", labelKey: "about", end: false, seoKey: "about" },
  { path: "/servicos", labelKey: "services", end: false, seoKey: "services" },
  { path: "/projetos", labelKey: "projects", end: false, seoKey: "projects" },
  { path: "/contato", labelKey: "contact", end: false, seoKey: "contact" },
  { path: "/juridico", labelKey: "legal", end: false, seoKey: "legal" },
]);

export const FOOTER_LEGAL_LINKS = Object.freeze([{ to: "/juridico", labelKey: "legal" }]);

export function seoKeyFor(pathname) {
  const p = norm(pathname);
  const hit = NAV_ROUTES.find((r) => norm(r.path) === p);
  return hit?.seoKey ?? null;
}

export function canonicalFor(pathname) {
  const p = norm(pathname);
  if (!seoKeyFor(pathname)) return `${SITE_ORIGIN}/`;
  return p === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${p}`;
}
