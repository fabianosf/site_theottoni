import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AppRoutes } from "./Router.jsx";
import { brand } from "./content/verbatim.js";
import { assets } from "./config/assetsConfig.js";
import { SITE_ORIGIN } from "./config/routes.js";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  description: brand.tagline,
  areaServed: "BR",
  url: `${SITE_ORIGIN}/`,
};

export default function AppRoot() {
  return (
    <BrowserRouter>
      <>
        <Helmet htmlAttributes={{ lang: "pt-BR" }}>
          <link rel="icon" type="image/x-icon" href={assets.favicon} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
        <AppRoutes />
      </>
    </BrowserRouter>
  );
}
