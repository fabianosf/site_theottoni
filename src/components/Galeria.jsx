import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n.jsx";

const gridTwo =
  "mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:mt-12 md:gap-10 mx-auto w-full";

export function Galeria({ items = [] }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const active = open != null && items[open] ? items[open] : null;
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const panelRef = useRef(null);
  const prevFocus = useRef(null);
  useEffect(() => {
    if (open == null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);
  useEffect(() => {
    if (open == null) return;
    prevFocus.current = document.activeElement;
    const tmr = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    const trap = (e) => {
      if (e.key !== "Tab") return;
      const a = closeBtnRef.current;
      const b = panelRef.current;
      if (!a || !b) return;
      const list = [a, b];
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const el = overlayRef.current;
    el?.addEventListener("keydown", trap);
    return () => {
      clearTimeout(tmr);
      el?.removeEventListener("keydown", trap);
      if (typeof prevFocus.current?.focus === "function") prevFocus.current.focus();
    };
  }, [open]);
  if (!items.length) return null;
  return (
    <section className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950 sm:py-16" aria-label={t("a11y.gallery")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-2xl text-slate-900 dark:text-slate-100 sm:text-left sm:text-3xl">{t("gallery.title")}</h2>
        <div className={gridTwo}>
          {items.map((it, idx) =>
            it?.src ? (
              <button
                type="button"
                key={`${it.alt}-${idx}`}
                onClick={() => setOpen(idx)}
                className="group flex w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left shadow-sm ring-0 transition hover:ring-2 hover:ring-amber-600/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:border-slate-800 dark:bg-slate-900 sm:rounded-2xl"
              >
                <span className="relative block aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11]">
                  <img
                    src={it.src}
                    alt={it.alt || ""}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  />
                </span>
              </button>
            ) : null
          )}
        </div>
      </div>
      {active ? (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/90 p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t("a11y.dialogImage")}
          onClick={close}
        >
          <button
            ref={closeBtnRef}
            type="button"
            className="absolute right-3 top-3 z-[101] rounded-full bg-white/15 px-3 py-1.5 text-xl leading-none text-white hover:bg-white/25 sm:right-4 sm:top-4"
            onClick={close}
            aria-label={t("a11y.close")}
          >
            ×
          </button>
          <div ref={panelRef} className="max-h-[min(92dvh,920px)] max-w-[min(96vw,1200px)] cursor-default outline-none" tabIndex={0} onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt || ""} className="max-h-[min(92dvh,920px)] max-w-[min(96vw,1200px)] object-contain" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
