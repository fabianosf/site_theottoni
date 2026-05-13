import { serviceCards, urbanHydroSummary } from "./verbatim.js";

const titles = Object.freeze({
  "https://theottoni.com.br/servicos/geracao-de-energia-em-rios-urbanos/": "Geração de energia em Rios Urbanos",
  "https://theottoni.com.br/servicos/saneamento-basico-e-geral/": "Saneamento básico e geral",
  "https://theottoni.com.br/servicos/geracao-de-hidroenergia/": "Geração de hidroenergia",
  "https://theottoni.com.br/servicos/diagnostico-ambiental/": "Diagnóstico ambiental",
  "https://theottoni.com.br/servicos/meio-ambiente/": "Meio ambiente",
  "https://theottoni.com.br/servicos/hidraulica-experimental/": "Hidráulica Experimental",
  "https://theottoni.com.br/servicos/sistemas-de-transportes-hidricos/": "Sistemas de Transportes Hídricos",
  "https://theottoni.com.br/servicos/sistemas-de-irrigacao/": "Sistemas de Irrigação",
  "https://theottoni.com.br/servicos/desenvolvimento-de-cursos-de-extensao-e-de-especializacao-na-area-de-recursos-hidricos/":
    "Desenvolvimento de cursos de extensão e de especialização na área de recursos hídricos",
  "https://theottoni.com.br/servicos/exclusividades-de-nossa-empresa/": "Exclusividades de Nossa Empresa",
});

function linkTextFor(card) {
  if (card.href.endsWith("geracao-de-energia-em-rios-urbanos/")) {
    return `${urbanHydroSummary.teaser}Clique e conheça`;
  }
  return `${card.teaser}Clique e conheça`;
}

export const servicosArchive = Object.freeze({
  documentTitle: "Arquivo Serviços - Theottoni",
  heading: "Serviços",
  items: Object.freeze(
    serviceCards.map((c) =>
      Object.freeze({
        title: titles[c.href] ?? c.title,
        typesLabel: "Tipos de serviços",
        linkText: linkTextFor(c),
        href: c.href,
      })
    )
  ),
});
