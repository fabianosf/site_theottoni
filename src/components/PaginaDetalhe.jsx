export function PaginaDetalhe({ heroSrc, title, subtitle, sourceUrl, children }) {
  return (
    <div className="bg-white">
      {heroSrc ? (
        <div className="w-full overflow-hidden border-b border-slate-200">
          <img src={heroSrc} alt="" className="max-h-[min(52vh,520px)] w-full object-cover object-center" loading="eager" decoding="async" />
        </div>
      ) : null}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
        {subtitle ? <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">{subtitle}</p> : null}
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h1 className="font-serif text-3xl text-slate-900 sm:text-4xl">{title}</h1>
          {sourceUrl ? (
            <a href={sourceUrl} className="shrink-0 text-sm font-semibold text-amber-600 underline-offset-4 hover:underline">
              Fonte original
            </a>
          ) : null}
        </div>
        <div className="mt-10 text-sm leading-relaxed text-slate-700">{children}</div>
      </div>
    </div>
  );
}
