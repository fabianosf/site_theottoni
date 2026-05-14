import { Link } from "react-router-dom";
import { publicEnv } from "../config/publicEnv.js";
import { FOOTER_LEGAL_LINKS, pathForLang } from "../config/routes.js";
import { assets } from "../config/assetsConfig.js";
import { useTranslation } from "../i18n.jsx";

export function Footer() {
  const { lang, t } = useTranslation();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pb-10 pt-12 dark:border-slate-800 dark:bg-slate-900 sm:pb-12 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4 sm:gap-6">
            <img src={assets.logoFooter} alt={t("brand.name")} className="h-12 w-auto shrink-0 object-contain sm:h-14" loading="lazy" />
            <div>
              <p className="font-serif text-2xl text-slate-900 dark:text-slate-100 sm:text-3xl">{t("brand.name")}</p>
              <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-400">{t("brand.tagline")}</p>
            </div>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <p>
              <a className="font-semibold text-slate-900 hover:text-amber-600 dark:text-slate-100 dark:hover:text-amber-400" href={`tel:${publicEnv.phoneTel}`}>
                {publicEnv.phoneDisplay}
              </a>
            </p>
            <p className="mt-2">
              <a className="hover:text-amber-600 dark:hover:text-amber-400" href={`mailto:${publicEnv.emailPrimary}`}>
                {publicEnv.emailPrimary}
              </a>
            </p>
            <p className="mt-1">
              <a className="hover:text-amber-600 dark:hover:text-amber-400" href={`mailto:${publicEnv.emailSecondary}`}>
                {publicEnv.emailSecondary}
              </a>
            </p>
            <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
              {FOOTER_LEGAL_LINKS.map((l) => (
                <Link key={l.labelKey} to={pathForLang(lang, l.labelKey)} className="hover:underline">
                  {t("footer.legal")}
                </Link>
              ))}
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500 dark:text-slate-500 sm:mt-10">{t("footer.rights", { year: new Date().getFullYear() })}</p>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-500/80 transition-colors dark:text-slate-500/80 md:text-right md:text-xs hover:text-slate-600 dark:hover:text-slate-400">
          {t("footer.devPrefix")}{" "}
          <a
            href={`mailto:${t("footer.devEmail")}`}
            className="font-medium text-slate-600 underline-offset-2 hover:text-amber-600 hover:underline dark:text-slate-400 dark:hover:text-amber-500"
          >
            {t("footer.devName")}
          </a>{" "}
          {t("footer.devSep")} {t("footer.devEmail")}
        </p>
      </div>
    </footer>
  );
}
