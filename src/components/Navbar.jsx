import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { publicEnv } from "../config/publicEnv.js";
import { NAV_ROUTES } from "../config/routes.js";
import { assets } from "../config/assetsConfig.js";
import { isHomeScrollPath, scrollToHomeSection } from "../lib/scrollSection.js";
import { useI18n, useTheme } from "../i18n.jsx";

const navCls = ({ isActive }) =>
  `block rounded-lg px-3 py-2.5 text-sm font-medium transition sm:py-2 ${
    isActive
      ? "bg-amber-500/10 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
      : "text-slate-700 hover:bg-slate-100 hover:text-amber-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-amber-400"
  }`;

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const headerRef = useRef(null);
  const menuBtnRef = useRef(null);
  const prevOpen = useRef(false);
  useEffect(() => {
    if (prevOpen.current && !open) {
      menuBtnRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown, true);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("mousedown", onDown, true);
    };
  }, [open]);
  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/95"
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4">
        <Link
          to="/"
          className="group flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
          onClick={(e) => {
            setOpen(false);
            if (loc.pathname === "/") {
              e.preventDefault();
              scrollToHomeSection("/");
            }
          }}
        >
          <img src={assets.logo} alt="Theottoni" className="h-9 w-auto shrink-0 object-contain sm:h-10" loading="eager" decoding="async" />
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate font-serif text-lg tracking-tight text-slate-900 group-hover:text-amber-600 dark:text-slate-100 dark:group-hover:text-amber-400 sm:text-xl">
              Theottoni
            </span>
            <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:block sm:text-[10px] sm:tracking-[0.2em]">
              {t("nav.taglineSub")}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex lg:gap-1 xl:gap-3" aria-label={t("a11y.menuMain")}>
          {NAV_ROUTES.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.end}
              className={navCls}
              onClick={(e) => {
                if (isHomeScrollPath(loc.pathname) && loc.pathname === l.path) {
                  e.preventDefault();
                  scrollToHomeSection(l.path);
                }
              }}
            >
              {t(`nav.${l.labelKey}`)}
            </NavLink>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <div className="hidden items-center gap-0.5 rounded-full border border-slate-200 p-0.5 dark:border-slate-700 sm:flex">
            <button
              type="button"
              className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${lang === "pt" ? "bg-slate-900 text-white dark:bg-amber-600 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}
              onClick={() => setLang("pt")}
            >
              PT
            </button>
            <button
              type="button"
              className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${lang === "en" ? "bg-slate-900 text-white dark:bg-amber-600 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-amber-600/40 hover:text-amber-600 dark:border-slate-700 dark:text-slate-200 dark:hover:text-amber-400"
            aria-label={dark ? t("a11y.themeLight") : t("a11y.themeDark")}
          >
            {dark ? <Sun className="h-4 w-4" strokeWidth={1.75} /> : <Moon className="h-4 w-4" strokeWidth={1.75} />}
          </button>
          <a
            href={`tel:${publicEnv.phoneTel}`}
            className="hidden rounded-full border border-amber-600/40 bg-slate-900 px-2.5 py-2 text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-amber-600 dark:border-amber-500/50 dark:bg-slate-800 dark:hover:bg-amber-600 sm:inline-block sm:px-4 sm:text-xs"
          >
            <span className="hidden md:inline">{publicEnv.phoneDisplay}</span>
            <span className="md:hidden">{t("nav.call")}</span>
          </a>
          <button
            ref={menuBtnRef}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 dark:border-slate-700 dark:text-slate-100 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t("a11y.menuClose") : t("a11y.menuOpen")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="flex w-5 flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-full rounded-full bg-slate-900 dark:bg-slate-100" />
                <span className="h-0.5 w-full rounded-full bg-slate-900 dark:bg-slate-100" />
                <span className="h-0.5 w-full rounded-full bg-slate-900 dark:bg-slate-100" />
              </span>
            )}
          </button>
        </div>
        {open ? (
          <nav
            id="menu-mobile"
            className="absolute left-0 right-0 top-full flex max-h-[min(70vh,calc(100dvh-4rem))] flex-col gap-0.5 overflow-y-auto border-b border-slate-200 bg-white px-4 py-3 shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:hidden"
            aria-label={t("a11y.menuMobile")}
          >
            <div className="mb-2 flex justify-center gap-1 rounded-full border border-slate-200 p-1 dark:border-slate-700">
              <button
                type="button"
                className={`flex-1 rounded-full py-2 text-xs font-semibold uppercase ${lang === "pt" ? "bg-slate-900 text-white dark:bg-amber-600" : "text-slate-600 dark:text-slate-400"}`}
                onClick={() => setLang("pt")}
              >
                PT
              </button>
              <button
                type="button"
                className={`flex-1 rounded-full py-2 text-xs font-semibold uppercase ${lang === "en" ? "bg-slate-900 text-white dark:bg-amber-600" : "text-slate-600 dark:text-slate-400"}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
            {NAV_ROUTES.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.end}
                className={navCls}
                onClick={(e) => {
                  if (isHomeScrollPath(loc.pathname) && loc.pathname === l.path) {
                    e.preventDefault();
                    scrollToHomeSection(l.path);
                  }
                  setOpen(false);
                }}
              >
                {t(`nav.${l.labelKey}`)}
              </NavLink>
            ))}
            <a
              href={`tel:${publicEnv.phoneTel}`}
              className="mt-2 rounded-full bg-slate-900 py-3 text-center text-sm font-semibold text-white dark:bg-slate-800"
              onClick={() => setOpen(false)}
            >
              {publicEnv.phoneDisplay}
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
