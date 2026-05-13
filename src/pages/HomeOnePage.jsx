import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero.jsx";
import { ServicesGrid } from "../components/ServicesGrid.jsx";
import { Galeria } from "../components/Galeria.jsx";
import { Portfolio } from "../components/Portfolio.jsx";
import { ContactForm } from "../components/ContactForm.jsx";
import { galeriaItems } from "../config/assetsConfig.js";
import { assets } from "../config/assetsConfig.js";
import { brand, globalIntro, windAndCampus } from "../content/verbatim.js";
import { scrollToHomeSection } from "../lib/scrollSection.js";
import { useI18n } from "../i18n.jsx";

export default function HomeOnePage() {
  const { pathname } = useLocation();
  const { lang, t } = useI18n();
  const intro = lang === "en" ? t("home.intro") : globalIntro.body;
  const windTitle = lang === "en" ? t("home.windTitle") : windAndCampus.title;
  const windBody = lang === "en" ? t("home.windBody") : windAndCampus.body;
  useLayoutEffect(() => {
    const run = () => scrollToHomeSection(pathname);
    const r = window.requestAnimationFrame(() => window.requestAnimationFrame(run));
    return () => window.cancelAnimationFrame(r);
  }, [pathname]);
  return (
    <>
      <Hero />
      <section
        id="sobre"
        className="scroll-mt-24 border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950 sm:scroll-mt-28 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 sm:text-xs sm:tracking-[0.35em]">{brand.name}</p>
          <h2 className="mt-2 font-serif text-3xl text-slate-900 dark:text-slate-100 sm:mt-3 sm:text-4xl md:text-5xl">{t("home.aboutHeading")}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-base">{intro}</p>
          <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 md:mt-14 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <h3 className="font-serif text-xl text-slate-900 dark:text-slate-100 sm:text-2xl md:text-3xl">{windTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-base">{windBody}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:rounded-3xl">
              <img
                src={assets.imovelPrincipal}
                alt=""
                className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/10] sm:min-h-[220px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
      <ServicesGrid />
      <Galeria items={galeriaItems} />
      <Portfolio />
      <ContactForm />
    </>
  );
}
