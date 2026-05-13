import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from "react";
import { seoKeyFor } from "./config/routes.js";

const LS_LANG = "theottoni.lang";
const LS_THEME = "theottoni.theme";

function dig(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
}

export const dict = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      projects: "Projetos",
      contact: "Contato",
      legal: "Jurídico",
      call: "Ligar",
      taglineSub: "Recursos hídricos",
    },
    brand: {
      tagline: "Estudos — Projetos e Tecnologia em Recursos Hídricos",
    },
    seo: {
      home: {
        title: "Theottoni — Início",
        description:
          "Theottoni — estudos, projetos e tecnologia em recursos hídricos, geração de energia limpa, saneamento, hidráulica experimental e meio ambiente.",
      },
      about: {
        title: "Theottoni — Sobre nós",
        description: "Conheça a Theottoni: estudos, projetos e tecnologia em recursos hídricos e energia limpa.",
      },
      services: {
        title: "Theottoni — Serviços",
        description: "Portfólio técnico e serviços em recursos hídricos e energia. Estudos, projetos e tecnologia em recursos hídricos e energia limpa.",
      },
      projects: {
        title: "Theottoni — Projetos e instalações",
        description: "Projetos, sede e laboratório. Estudos, projetos e tecnologia em recursos hídricos e energia limpa.",
      },
      contact: {
        title: "Theottoni — Contato",
        description: "Canais oficiais e formulário de contato. Estudos, projetos e tecnologia em recursos hídricos e energia limpa.",
      },
      legal: {
        title: "Theottoni — Jurídico e documentação",
        description: "Documentação, contratos, licenciamento e legislação. Estudos, projetos e tecnologia em recursos hídricos e energia limpa.",
      },
      notFound: {
        title: "Theottoni — Página não encontrada",
        description: "A página solicitada não existe ou foi movida.",
      },
    },
    hero: {
      ctaServices: "Serviços",
      ctaContact: "Fale conosco",
      originalLink: "Página original no domínio theottoni.com.br",
    },
    home: {
      aboutHeading: "Sobre nós",
      intro:
        "Uma empresa dedicada ao estudo e desenvolvimento de tecnologias na área de geração de energia limpa. Adotamos uma política de meio ambiente voltada à preservação e revitalização dos recursos hídricos naturais, promovendo sinergia entre desenvolvimento econômico e preservação ambiental.",
      windTitle: "Energia Eólica",
      windBody:
        "Esse é o projeto de nossa nova sede que contemplará área Administrativa e um moderno Laboratório de Hidráulica que será construída em Itajubá - MG, junto à UNIFEI e o Laboratório Tecnológico de Alta Potência de Inovação em Sistemas Elétricos, voltado para Inovações no Setor elétrico, Mecânico e Eletrônico que está sendo construído pelo Instituto SENAI em ITAJUBÁ – MG.",
      urbanTitle: "Geração de energia em Rios Urbanos",
      urbanTypes: "Tipos de serviços",
      urbanTeaser:
        "Impactos Ambientais Desprezíveis Custos compatíveis à uma Usina Eólica Bacias Litorâneas Vales Industrializados ou com fragilidade Ambiental Grande Planície Europeia e Rio Reno Eficiência energética, compatível com PCH/UHE Compatível para pequenas, médias e grandes vazões e quedas residuais entre UHE’s.",
    },
    services: {
      archiveDocTitle: "Arquivo Serviços - Theottoni",
      archiveHeading: "Serviços",
      portfolioEyebrow: "Portfólio técnico",
      portfolioHeading: "Serviços",
      typesLabel: "Tipos de serviços",
      viewOriginal: "Ver no site original",
      legalCardTitle: "Jurídico e documentação",
      legalCardTypes: "Documentação",
      legalCardDesc: "Licenciamento, política de privacidade e termos de uso.",
      legalCardCta: "Ver detalhes",
    },
    gallery: { title: "Galeria" },
    portfolio: {
      eyebrow: "Projetos",
      heading: "Imóveis e instalações",
      items: [
        {
          id: "sede-itajuba",
          title: "Projeto de nova sede administrativa e Laboratório de Hidráulica — Itajubá/MG",
          description:
            "Esse é o projeto de nossa nova sede que contemplará área Administrativa e um moderno Laboratório de Hidráulica que será construída em Itajubá - MG, junto à UNIFEI e o Laboratório Tecnológico de Alta Potência de Inovação em Sistemas Elétricos, voltado para Inovações no Setor elétrico, Mecânico e Eletrônico que está sendo construído pelo Instituto SENAI em ITAJUBÁ – MG.",
          alt: "Projeto de sede administrativa e laboratório de hidráulica em Itajubá",
        },
      ],
    },
    contact: {
      eyebrow: "Fale conosco",
      channelsHeading: "Canais oficiais",
      phoneWhats: "Telefone/WhatsApp",
      emails: "E-mails",
      formTitle: "Formulário de contato",
      fields: ["Nome", "E-mail", "Telefone", "Mensagem"],
      hoursTitle: "Segunda à Sexta",
      hours: "9h00 - 19h00",
      honeypot: "Empresa",
      sending: "A enviar…",
      submitWeb3: "Enviar mensagem",
      submitMailto: "Enviar por e-mail",
      success: "Mensagem enviada. Obrigado.",
      error: "Não foi possível enviar. Tente o e-mail ou mais tarde.",
    },
    juridico: {
      title: "Documentação, contratos e licenciamento",
      subtitle: "Jurídico",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
    },
    footer: {
      legal: "Documentação legal",
      rights: "© {year} Theottoni. Todos os direitos reservados.",
    },
    notFound: {
      title: "Página não encontrada",
      body: "O endereço não existe ou foi alterado.",
      cta: "Voltar ao início",
    },
    common: {
      loading: "Carregando…",
      source: "Fonte original",
    },
    a11y: {
      skip: "Ir para o conteúdo",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
      menuMain: "Principal",
      menuMobile: "Menu mobile",
      gallery: "Galeria",
      dialogImage: "Imagem ampliada",
      close: "Fechar",
      themeDark: "Ativar tema escuro",
      themeLight: "Ativar tema claro",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      legal: "Legal",
      call: "Call",
      taglineSub: "Water resources",
    },
    brand: {
      tagline: "Studies — Projects and Technology in Water Resources",
    },
    seo: {
      home: {
        title: "Theottoni — Home",
        description:
          "Theottoni — studies, projects and technology in water resources, clean power generation, sanitation, experimental hydraulics and the environment.",
      },
      about: {
        title: "Theottoni — About",
        description: "Meet Theottoni: studies, projects and technology in water resources and clean energy.",
      },
      services: {
        title: "Theottoni — Services",
        description: "Technical portfolio and services in water resources and energy. Studies, projects and technology in water resources and clean energy.",
      },
      projects: {
        title: "Theottoni — Projects & facilities",
        description: "Projects, headquarters and laboratory. Studies, projects and technology in water resources and clean energy.",
      },
      contact: {
        title: "Theottoni — Contact",
        description: "Official channels and contact form. Studies, projects and technology in water resources and clean energy.",
      },
      legal: {
        title: "Theottoni — Legal & documentation",
        description: "Documentation, contracts, licensing and compliance. Studies, projects and technology in water resources and clean energy.",
      },
      notFound: {
        title: "Theottoni — Page not found",
        description: "The requested page does not exist or has been moved.",
      },
    },
    hero: {
      ctaServices: "Services",
      ctaContact: "Contact us",
      originalLink: "Original page at theottoni.com.br",
    },
    home: {
      aboutHeading: "About us",
      intro:
        "A company dedicated to studying and developing technologies for clean power generation. We pursue an environmental policy focused on preserving and restoring natural water resources, aligning economic development with environmental protection.",
      windTitle: "Wind energy",
      windBody:
        "Our new headquarters project will include administrative space and a modern hydraulics laboratory in Itajubá, MG, alongside UNIFEI and the high-power innovation lab for electrical, mechanical and electronic systems built by SENAI in Itajubá.",
      urbanTitle: "Power generation in urban rivers",
      urbanTypes: "Service types",
      urbanTeaser:
        "Negligible environmental impacts; costs comparable to wind power; suitable for coastal basins, industrialized valleys or fragile environments; European plains and Rhine-like rivers; energy performance compatible with small hydro and conventional hydro; fits a wide range of flows and residual head between dams.",
    },
    services: {
      archiveDocTitle: "Services archive — Theottoni",
      archiveHeading: "Services",
      portfolioEyebrow: "Technical portfolio",
      portfolioHeading: "Services",
      typesLabel: "Service types",
      viewOriginal: "View on original site",
      legalCardTitle: "Legal & documentation",
      legalCardTypes: "Documentation",
      legalCardDesc: "Licensing, privacy policy and terms of use.",
      legalCardCta: "View details",
    },
    gallery: { title: "Gallery" },
    portfolio: {
      eyebrow: "Projects",
      heading: "Real estate & facilities",
      items: [
        {
          id: "sede-itajuba",
          title: "New administrative HQ and hydraulics laboratory — Itajubá/MG",
          description:
            "Our new headquarters will combine administrative areas with a modern hydraulics laboratory in Itajubá, MG, next to UNIFEI and SENAI’s high-power innovation laboratory for electrical, mechanical and electronic systems.",
          alt: "Administrative and hydraulics laboratory project in Itajubá",
        },
      ],
    },
    contact: {
      eyebrow: "Contact us",
      channelsHeading: "Official channels",
      phoneWhats: "Phone / WhatsApp",
      emails: "Emails",
      formTitle: "Contact form",
      fields: ["Name", "Email", "Phone", "Message"],
      hoursTitle: "Monday to Friday",
      hours: "9:00 a.m. – 7:00 p.m.",
      honeypot: "Company",
      sending: "Sending…",
      submitWeb3: "Send message",
      submitMailto: "Send via email",
      success: "Message sent. Thank you.",
      error: "Could not send. Try email or try again later.",
    },
    juridico: {
      title: "Documentation, contracts and licensing",
      subtitle: "Legal",
      privacy: "Privacy policy",
      terms: "Terms of use",
    },
    footer: {
      legal: "Legal documentation",
      rights: "© {year} Theottoni. All rights reserved.",
    },
    notFound: {
      title: "Page not found",
      body: "This address does not exist or has changed.",
      cta: "Back to home",
    },
    common: {
      loading: "Loading…",
      source: "Original source",
    },
    a11y: {
      skip: "Skip to content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      menuMain: "Main",
      menuMobile: "Mobile menu",
      gallery: "Gallery",
      dialogImage: "Enlarged image",
      close: "Close",
      themeDark: "Enable dark theme",
      themeLight: "Enable light theme",
    },
  },
};

export function seoFor(pathname, lang) {
  const L = lang === "en" ? "en" : "pt";
  const key = seoKeyFor(pathname);
  const pack = dict[L].seo;
  if (key && pack[key]) return { title: pack[key].title, description: pack[key].description, noindex: false };
  return { title: pack.notFound.title, description: pack.notFound.description, noindex: true };
}

const I18nContext = createContext(null);
const ThemeContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => (typeof localStorage !== "undefined" && localStorage.getItem(LS_LANG) === "en" ? "en" : "pt"));
  const setLang = useCallback((L) => {
    const v = L === "en" ? "en" : "pt";
    setLangState(v);
    if (typeof localStorage !== "undefined") localStorage.setItem(LS_LANG, v);
  }, []);
  const t = useMemo(() => {
    const L = lang === "en" ? "en" : "pt";
    return (path, vars) => {
      let s = dig(dict[L], path) ?? dig(dict.pt, path) ?? path;
      if (vars && typeof s === "string") {
        for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
      }
      return s;
    };
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const v = useContext(I18nContext);
  if (!v) throw new Error("useI18n");
  return v;
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => typeof localStorage !== "undefined" && localStorage.getItem(LS_THEME) === "dark");
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    if (typeof localStorage !== "undefined") localStorage.setItem(LS_THEME, dark ? "dark" : "light");
  }, [dark]);
  const toggle = useCallback(() => setDark((d) => !d), []);
  const value = useMemo(() => ({ dark, toggle }), [dark, toggle]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const v = useContext(ThemeContext);
  if (!v) throw new Error("useTheme");
  return v;
}
