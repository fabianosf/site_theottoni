import { Link } from "react-router-dom";
import { brand, globalIntro, windAndCampus, urbanHydroSummary } from "../content/verbatim.js";
import { assets } from "../config/assetsConfig.js";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-white">
      <img
        src={assets.heroSlide}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={550}
        sizes="100vw"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-slate-900/85" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.22),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-500 sm:text-xs sm:tracking-[0.35em]">{brand.name}</p>
          <h1 className="mt-3 font-serif text-[clamp(1.75rem,5vw,3.75rem)] leading-tight tracking-tight text-white sm:mt-4">{brand.tagline}</h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base">{globalIntro.body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/servicos"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-amber-900/20 transition hover:bg-white hover:text-slate-900 sm:px-8"
            >
              Serviços
            </Link>
            <Link
              to="/contato"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-amber-400 hover:text-amber-200 sm:px-8"
            >
              Fale conosco
            </Link>
          </div>
        </div>
        <div className="space-y-5 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:space-y-6 sm:rounded-3xl sm:p-8">
          <div>
            <h2 className="font-serif text-2xl text-white">{windAndCampus.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/90">{windAndCampus.body}</p>
          </div>
          <div className="h-px bg-white/15" />
          <div>
            <h2 className="font-serif text-2xl text-white">{urbanHydroSummary.title}</h2>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">{urbanHydroSummary.typesLabel}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">{urbanHydroSummary.teaser}</p>
            <a
              href={urbanHydroSummary.href}
              className="mt-4 inline-block text-sm font-semibold text-white underline decoration-white/60 underline-offset-4 hover:text-amber-200 hover:decoration-amber-200"
            >
              Página original no domínio theottoni.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
