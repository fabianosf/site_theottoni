import { assets } from "../config/assetsConfig.js";
import { dict, useTranslation } from "../i18n.jsx";

export function Portfolio() {
  const { lang, t } = useTranslation();
  const L = lang === "en" ? "en" : "pt";
  const copy = dict[L].portfolio;
  return (
    <section id="projetos" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-900 sm:scroll-mt-28 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 sm:text-xs sm:tracking-[0.35em]">{t("portfolio.eyebrow")}</p>
        <h2 className="mt-2 font-serif text-3xl text-slate-900 dark:text-slate-100 sm:mt-3 sm:text-4xl md:text-5xl">{t("portfolio.heading")}</h2>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:mt-12">
          {copy.items.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:rounded-3xl">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={assets.imovelPrincipal} alt={item.alt} className="h-full w-full object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" decoding="async" />
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="font-serif text-lg text-slate-900 dark:text-slate-100 sm:text-xl md:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mt-3">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
