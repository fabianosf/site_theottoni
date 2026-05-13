import { useI18n } from "../i18n.jsx";

export function PaginaDetalhe({ heroSrc, title, subtitle, sourceUrl, children }) {
  const { t } = useI18n();
  return (
    <div className="bg-white dark:bg-slate-950">
      {heroSrc ? (
        <div className="w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <img src={heroSrc} alt="" className="max-h-[min(52vh,520px)] w-full object-cover object-center" loading="eager" decoding="async" />
        </div>
      ) : null}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
        {subtitle ? <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-500">{subtitle}</p> : null}
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h1 className="font-serif text-3xl text-slate-900 dark:text-slate-100 sm:text-4xl">{title}</h1>
          {sourceUrl ? (
            <a href={sourceUrl} className="shrink-0 text-sm font-semibold text-amber-600 underline-offset-4 hover:underline dark:text-amber-500">
              {t("common.source")}
            </a>
          ) : null}
        </div>
        <div className="mt-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
}
