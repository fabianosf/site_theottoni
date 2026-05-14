import { Link } from "react-router-dom";
import { pathForLang } from "../config/routes.js";
import { useTranslation } from "../i18n.jsx";

export default function NotFoundPage() {
  const { lang, t } = useTranslation();
  return (
    <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 dark:border-slate-800 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-serif text-6xl text-slate-200 dark:text-slate-700 sm:text-7xl">404</p>
        <h1 className="mt-4 font-serif text-2xl text-slate-900 dark:text-slate-100 sm:text-3xl">{t("notFound.title")}</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t("notFound.body")}</p>
        <Link
          to={pathForLang(lang, "home")}
          className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-amber-600 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-amber-900/20 transition hover:bg-slate-900 hover:text-white dark:hover:bg-amber-500"
        >
          {t("notFound.cta")}
        </Link>
      </div>
    </section>
  );
}
