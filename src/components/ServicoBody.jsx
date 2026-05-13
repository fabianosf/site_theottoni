import { urbanHydroPage } from "../content/verbatim.js";

export function ServiceSections({ page }) {
  return (
    <div className="space-y-10">
      {page.sections.map((sec) => (
        <article key={sec.title}>
          <h2 className="font-serif text-xl text-slate-900 dark:text-slate-100">{sec.title}</h2>
          {sec.intro ? <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{sec.intro}</p> : null}
          {sec.bullets?.length ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {sec.bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function UrbanHydroDetail() {
  const p = urbanHydroPage;
  return (
    <div className="space-y-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
      <div>
        <h2 className="font-serif text-2xl text-slate-900 dark:text-slate-100">{p.title}</h2>
        <h3 className="mt-4 font-serif text-lg text-amber-600 dark:text-amber-500">{p.subtitle}</h3>
        <p className="mt-4">{p.intro}</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5">
          {p.premises.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      </div>
      <div>
        <p className="font-semibold text-slate-900 dark:text-slate-100">{p.applicationsIntro}</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          {p.applications.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      </div>
      <div>
        <p className="font-semibold text-slate-900 dark:text-slate-100">{p.advantagesTitle}</p>
        <p className="mt-2 font-medium text-slate-900 dark:text-slate-100">{p.advantagesSubtitle}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {p.advantagesBullets.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-slate-900 dark:text-slate-100">{p.requirementsTitle}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {p.requirements.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-slate-900 dark:text-slate-100">{p.demandsTitle}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {p.demands.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-slate-900 dark:text-slate-100">{p.potentialTitle}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {p.potential.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-medium text-slate-900 dark:text-slate-100">{p.comparisonCaption}</p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
          <table className="min-w-full border-collapse text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-900">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Atributo</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Médias e Grandes Usinas (P&gt;30MW)</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">PCH (ISPS30 MW)</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">UPQ/CHF</th>
              </tr>
            </thead>
            <tbody>
              {p.comparisonRows.map((row) => (
                <tr key={row.atributo} className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{row.atributo}</td>
                  <td className="px-4 py-3">{row.uhe}</td>
                  <td className="px-4 py-3">{row.pch}</td>
                  <td className="px-4 py-3">{row.upq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-500">{p.contactNote}</p>
    </div>
  );
}
