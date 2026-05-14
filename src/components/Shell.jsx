import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { RouteHelmet } from "./RouteHelmet.jsx";
import { RouteAnnouncer } from "./RouteAnnouncer.jsx";
import { useTranslation } from "../i18n.jsx";

function Fallback() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[30vh] items-center justify-center px-4 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
      {t("common.loading")}
    </div>
  );
}

export function Shell() {
  const { t } = useTranslation();
  return (
    <>
      <button
        type="button"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:bg-amber-600"
        onClick={() => {
          const el = document.getElementById("conteudo-principal");
          el?.focus({ preventScroll: true });
          el?.scrollIntoView({ block: "start", behavior: "smooth" });
        }}
      >
        {t("a11y.skip")}
      </button>
      <Navbar />
      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="min-h-[45vh] w-full max-w-[100vw] overflow-x-hidden bg-white outline-none dark:bg-slate-950"
      >
        <RouteHelmet />
        <RouteAnnouncer />
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
