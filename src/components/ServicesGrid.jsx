import { Link } from "react-router-dom";
import { serviceCards } from "../content/verbatim.js";
import { servicosArchive } from "../content/servicosIndex.js";
import { serviceHero } from "../config/assetsConfig.js";

function slugFromHref(href) {
  try {
    const u = new URL(href);
    const parts = u.pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] || "servico";
  } catch {
    return "servico";
  }
}

export function ServicesGrid() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-white py-12 sm:scroll-mt-28 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-b border-slate-200 pb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-500">{servicosArchive.documentTitle}</p>
          <h2 className="mt-3 font-serif text-4xl text-slate-900 sm:text-5xl">{servicosArchive.heading}</h2>
          <div className="mt-12 max-w-4xl space-y-12">
            {servicosArchive.items.map((it) => {
              const slug = slugFromHref(it.href);
              const hero = serviceHero[slug];
              return (
                <article key={it.href} className="border-b border-slate-100 pb-12 last:border-0">
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
                    <div>
                      <h2 className="font-serif text-2xl text-slate-900 sm:text-3xl">{it.title}</h2>
                      <h3 className="mt-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">{it.typesLabel}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        <a href={it.href} target="_blank" rel="noopener noreferrer" className="font-medium text-amber-600 underline-offset-4 hover:underline">
                          {it.linkText}
                        </a>
                      </p>
                    </div>
                    {hero ? (
                      <a href={it.href} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                        <img src={hero} alt="" loading="lazy" decoding="async" className="h-44 w-full object-cover object-center transition hover:opacity-95 lg:h-full lg:min-h-[11rem]" />
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Portfólio técnico</p>
          <h2 className="mt-3 font-serif text-4xl text-slate-900">Serviços</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {serviceCards.map((s) => {
            const slug = slugFromHref(s.href);
            const thumb = serviceHero[slug];
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-amber-600/40 hover:shadow-lg"
              >
                {thumb ? <img src={thumb} alt="" loading="lazy" className="h-36 w-full object-cover object-center" /> : null}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl text-slate-900 group-hover:text-amber-600">{s.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{s.typesLabel}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{s.teaser}</p>
                  <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-amber-600">Ver no site original</span>
                </div>
              </a>
            );
          })}
          <Link
            to="/juridico"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-amber-600/40 hover:shadow-lg"
          >
            <img src={serviceHero["meio-ambiente"]} alt="" loading="lazy" className="h-36 w-full object-cover object-center" />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-serif text-xl text-slate-900 group-hover:text-amber-600">Jurídico e documentação</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Documentação</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">Licenciamento, política de privacidade e termos de uso.</p>
              <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-amber-600">Ver detalhes</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
