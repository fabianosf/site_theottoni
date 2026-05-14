export const HOME_SCROLL_PATHS = Object.freeze({
  "/": "top",
  "/sobre": "sobre",
  "/about": "sobre",
  "/servicos": "servicos",
  "/services": "servicos",
  "/projetos": "projetos",
  "/projects": "projetos",
  "/contato": "contato",
  "/contact": "contato",
});

export function scrollToHomeSection(pathname) {
  const id = HOME_SCROLL_PATHS[pathname] ?? "top";
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function isHomeScrollPath(pathname) {
  return Object.prototype.hasOwnProperty.call(HOME_SCROLL_PATHS, pathname);
}
