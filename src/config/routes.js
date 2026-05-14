export const SITE_ORIGIN = String(import.meta.env.VITE_SITE_ORIGIN ?? "https://theottoni.com.br").replace(/\/$/, "");

export function norm(p) {
  if (!p || p === "/") return "/";
  return p.replace(/\/+$/, "") || "/";
}

export const ROUTE_DEFS = Object.freeze([
  { labelKey: "home", seoKey: "home", end: true, pt: "/", en: "/" },
  { labelKey: "about", seoKey: "about", end: false, pt: "/sobre", en: "/about" },
  { labelKey: "services", seoKey: "services", end: false, pt: "/servicos", en: "/services" },
  { labelKey: "projects", seoKey: "projects", end: false, pt: "/projetos", en: "/projects" },
  { labelKey: "contact", seoKey: "contact", end: false, pt: "/contato", en: "/contact" },
  { labelKey: "legal", seoKey: "legal", end: false, pt: "/juridico", en: "/legal" },
]);

export const NAV_ROUTES = Object.freeze(ROUTE_DEFS.map(({ labelKey, end, seoKey }) => ({ labelKey, end, seoKey })));

export const FOOTER_LEGAL_LINKS = Object.freeze([{ labelKey: "legal" }]);

export function pathForLang(lang, labelKey) {
  const d = ROUTE_DEFS.find((r) => r.labelKey === labelKey);
  if (!d) return "/";
  return d[lang === "en" ? "en" : "pt"];
}

export function pathForSeoKey(lang, seoKey) {
  const d = ROUTE_DEFS.find((r) => r.seoKey === seoKey);
  if (!d) return "/";
  return d[lang === "en" ? "en" : "pt"];
}

export function seoKeyFor(pathname) {
  const p = norm(pathname);
  const hit = ROUTE_DEFS.find((r) => norm(r.pt) === p || norm(r.en) === p);
  return hit?.seoKey ?? null;
}

export function canonicalFor(pathname, lang) {
  const key = seoKeyFor(pathname);
  if (!key) return `${SITE_ORIGIN}/`;
  const path = pathForSeoKey(lang ?? "pt", key);
  return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}
