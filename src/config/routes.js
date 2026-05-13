import { brand } from "../content/verbatim.js";

export const SITE_ORIGIN = String(import.meta.env.VITE_SITE_ORIGIN ?? "https://theottoni.com.br").replace(/\/$/, "");

const descDefault =
  "Theottoni — estudos, projetos e tecnologia em recursos hídricos, geração de energia limpa, saneamento, hidráulica experimental e meio ambiente.";

const descShort = "Estudos, projetos e tecnologia em recursos hídricos e energia limpa.";

function norm(p) {
  if (!p || p === "/") return "/";
  return p.replace(/\/+$/, "") || "/";
}

export const NAV_ROUTES = Object.freeze([
  { path: "/", label: "Início", end: true, title: `${brand.name} — Início`, description: descDefault },
  { path: "/sobre", label: "Sobre", title: `${brand.name} — Sobre nós`, description: `Conheça a ${brand.name}: ${descShort}` },
  { path: "/servicos", label: "Serviços", title: `${brand.name} — Serviços`, description: `Portfólio técnico e serviços em recursos hídricos e energia. ${descShort}` },
  { path: "/projetos", label: "Projetos", title: `${brand.name} — Projetos e instalações`, description: `Projetos, sede e laboratório. ${descShort}` },
  { path: "/contato", label: "Contato", title: `${brand.name} — Contato`, description: `Canais oficiais e formulário de contato. ${descShort}` },
  { path: "/juridico", label: "Jurídico", title: `${brand.name} — Jurídico e documentação`, description: `Documentação, contratos, licenciamento e legislação. ${descShort}` },
]);

export const FOOTER_LEGAL_LINKS = Object.freeze([{ to: "/juridico", label: "Documentação legal" }]);

const SEO_INDEX = new Map(NAV_ROUTES.map((r) => [norm(r.path), { title: r.title, description: r.description, noindex: false }]));

export function getSeo(pathname) {
  const p = norm(pathname);
  if (SEO_INDEX.has(p)) return SEO_INDEX.get(p);
  return {
    title: `${brand.name} — Página não encontrada`,
    description: "A página solicitada não existe ou foi movida.",
    noindex: true,
  };
}

export function canonicalFor(pathname) {
  const p = norm(pathname);
  if (!SEO_INDEX.has(p)) return `${SITE_ORIGIN}/`;
  return p === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${p}`;
}
