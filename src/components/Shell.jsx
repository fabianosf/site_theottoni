import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { RouteHelmet } from "./RouteHelmet.jsx";
import { RouteAnnouncer } from "./RouteAnnouncer.jsx";

const fallback = (
  <div className="flex min-h-[30vh] items-center justify-center px-4 text-sm text-slate-500" aria-live="polite">
    Carregando…
  </div>
);

export function Shell() {
  return (
    <>
      <button
        type="button"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
        onClick={() => {
          const el = document.getElementById("conteudo-principal");
          el?.focus({ preventScroll: true });
          el?.scrollIntoView({ block: "start", behavior: "smooth" });
        }}
      >
        Ir para o conteúdo
      </button>
      <Navbar />
      <main id="conteudo-principal" tabIndex={-1} className="min-h-[45vh] w-full max-w-[100vw] overflow-x-hidden outline-none">
        <RouteHelmet />
        <RouteAnnouncer />
        <Suspense fallback={fallback}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
