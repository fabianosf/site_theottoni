import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AppRoutes } from "./Router.jsx";
import { assets } from "./config/assetsConfig.js";
import { SITE_ORIGIN, seoKeyFor } from "./config/routes.js";
import { ThemeProvider, I18nProvider, useTranslation } from "./i18n.jsx";

function DocumentTitle() {
  const { pathname } = useLocation();
  const { lang, t } = useTranslation();
  const key = seoKeyFor(pathname);
  useEffect(() => {
    const k = key ?? "notFound";
    document.title = t(`metadata.${k}.title`);
  }, [pathname, lang, key, t]);
  return null;
}

function HelmetInner() {
  const { lang, t } = useTranslation();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: t("brand.name"),
    description: t("brand.tagline"),
    areaServed: "BR",
    url: `${SITE_ORIGIN}/`,
  };
  return (
    <Helmet htmlAttributes={{ lang: lang === "en" ? "en" : "pt-BR" }}>
      <link rel="icon" type="image/x-icon" href={assets.favicon} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export default function AppRoot() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <BrowserRouter>
          <HelmetInner />
          <DocumentTitle />
          <AppRoutes />
        </BrowserRouter>
      </I18nProvider>
    </ThemeProvider>
  );
}
