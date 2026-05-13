import { Link } from "react-router-dom";
import { brand } from "../content/verbatim.js";
import { publicEnv } from "../config/publicEnv.js";
import { FOOTER_LEGAL_LINKS } from "../config/routes.js";
import { assets } from "../config/assetsConfig.js";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pb-10 pt-12 sm:pb-12 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4 sm:gap-6">
            <img src={assets.logoFooter} alt="" className="h-12 w-auto shrink-0 object-contain sm:h-14" loading="lazy" />
            <div>
              <p className="font-serif text-2xl text-slate-900 sm:text-3xl">{brand.name}</p>
              <p className="mt-2 max-w-sm text-sm text-slate-600">{brand.tagline}</p>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <p>
              <a className="font-semibold text-slate-900 hover:text-amber-600" href={`tel:${publicEnv.phoneTel}`}>
                {publicEnv.phoneDisplay}
              </a>
            </p>
            <p className="mt-2">
              <a className="hover:text-amber-600" href={`mailto:${publicEnv.emailPrimary}`}>
                {publicEnv.emailPrimary}
              </a>
            </p>
            <p className="mt-1">
              <a className="hover:text-amber-600" href={`mailto:${publicEnv.emailSecondary}`}>
                {publicEnv.emailSecondary}
              </a>
            </p>
            <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
              {FOOTER_LEGAL_LINKS.map((l) => (
                <Link key={`${l.to}-${l.label}`} to={l.to} className="hover:underline">
                  {l.label}
                </Link>
              ))}
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500 sm:mt-10">© {new Date().getFullYear()} Theottoni. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
