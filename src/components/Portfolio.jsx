import { assets } from "../config/assetsConfig.js";
import { propertyShowcase } from "../content/verbatim.js";

export function Portfolio() {
  return (
    <section id="projetos" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-12 sm:scroll-mt-28 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-600 sm:text-xs sm:tracking-[0.35em]">Projetos</p>
        <h2 className="mt-2 font-serif text-3xl text-slate-900 sm:mt-3 sm:text-4xl md:text-5xl">Imóveis e instalações</h2>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:mt-12">
          {propertyShowcase.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={assets.imovelPrincipal} alt={item.alt} className="h-full w-full object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" decoding="async" />
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="font-serif text-lg text-slate-900 sm:text-xl md:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
