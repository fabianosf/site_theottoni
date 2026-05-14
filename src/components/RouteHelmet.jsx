import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import slideHero from "imagens/slide1-1920x550.jpg.jpeg";
import { SITE_ORIGIN, canonicalFor } from "../config/routes.js";
import { seoFor, useTranslation } from "../i18n.jsx";

function ogImageAbsolute(assetPath) {
  const base = SITE_ORIGIN.replace(/\/$/, "");
  const raw = String(assetPath);
  if (raw.startsWith("http")) return raw;
  const p = raw.startsWith("/") ? raw : `/${raw}`;
  return `${base}${p}`;
}

export function RouteHelmet() {
  const { pathname } = useLocation();
  const { lang, t } = useTranslation();
  const { title, description, noindex } = seoFor(pathname, lang);
  const canonical = canonicalFor(pathname);
  const ogImage = ogImageAbsolute(slideHero);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={t("brand.ogImageAlt")} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
