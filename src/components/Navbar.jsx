import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { publicEnv } from "../config/publicEnv.js";
import { NAV_ROUTES } from "../config/routes.js";
import { assets } from "../config/assetsConfig.js";
import { isHomeScrollPath, scrollToHomeSection } from "../lib/scrollSection.js";

const navCls = ({ isActive }) =>
  `block rounded-lg px-3 py-2.5 text-sm font-medium transition sm:py-2 ${isActive ? "bg-slate-900/5 text-amber-600" : "text-slate-700 hover:bg-slate-100 hover:text-amber-600"}`;

export function Navbar() {
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
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
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
            <span className="truncate font-serif text-lg tracking-tight text-slate-900 group-hover:text-amber-600 sm:text-xl">Theottoni</span>
            <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block sm:text-[10px] sm:tracking-[0.2em]">Recursos hídricos</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex lg:gap-2 xl:gap-6" aria-label="Principal">
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
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${publicEnv.phoneTel}`}
            className="hidden rounded-full border border-amber-600/40 bg-slate-900 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-amber-600 hover:text-white sm:inline-block sm:px-4 sm:text-xs"
          >
            <span className="hidden md:inline">{publicEnv.phoneDisplay}</span>
            <span className="md:hidden">Ligar</span>
          </a>
          <button
            ref={menuBtnRef}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="flex w-5 flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-full rounded-full bg-slate-900" />
                <span className="h-0.5 w-full rounded-full bg-slate-900" />
                <span className="h-0.5 w-full rounded-full bg-slate-900" />
              </span>
            )}
          </button>
        </div>
        {open ? (
          <nav
            id="menu-mobile"
            className="absolute left-0 right-0 top-full flex max-h-[min(70vh,calc(100dvh-4rem))] flex-col gap-0.5 overflow-y-auto border-b border-slate-200 bg-white px-4 py-3 shadow-xl lg:hidden"
            aria-label="Menu mobile"
          >
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
                {l.label}
              </NavLink>
            ))}
            <a
              href={`tel:${publicEnv.phoneTel}`}
              className="mt-2 rounded-full bg-slate-900 py-3 text-center text-sm font-semibold text-white"
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
