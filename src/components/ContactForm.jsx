import { useState } from "react";
import { publicEnv } from "../config/publicEnv.js";
import { buildMailto } from "../lib/mailto.js";
import { faleConoscoPage } from "../content/verbatim.js";
import { assets } from "../config/assetsConfig.js";
import { useTranslation } from "../i18n.jsx";

const initial = { nome: "", email: "", telefone: "", mensagem: "" };
const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";

function clip(v, max) {
  return String(v ?? "")
    .replace(/[\u0000-\u001F<>]/g, " ")
    .trim()
    .slice(0, max);
}

export function ContactForm() {
  const { t } = useTranslation();
  const fields = t("contact.fields");
  const [form, setForm] = useState(initial);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    if (honeypot) return;
    const nome = clip(form.nome, 200);
    const email = clip(form.email, 254);
    const telefone = clip(form.telefone, 40);
    const mensagem = clip(form.mensagem, 8000);
    const subj = t("common.mailSubject", { name: nome || t("common.visitor") });
    if (!WEB3_KEY) {
      window.location.href = buildMailto({
        to: publicEnv.emailPrimary,
        subject: subj,
        body: `${fields[0]}: ${nome}\n${fields[1]}: ${email}\n${fields[2]}: ${telefone}\n\n${mensagem}`,
      });
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3_KEY,
          subject: subj,
          from_name: nome || t("common.visitor"),
          email: email || publicEnv.emailPrimary,
          phone: telefone,
          message: mensagem,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        setForm(initial);
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contato" className="bg-slate-900 py-12 text-white dark:bg-black sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">{t("contact.eyebrow")}</p>
          <h2 className="mt-2 font-serif text-3xl sm:mt-3 sm:text-4xl">{t("contact.channelsHeading")}</h2>
          <dl className="mt-8 space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <img src={assets.iconTel} alt={t("a11y.phoneIconAlt")} className="mt-0.5 h-5 w-5 shrink-0 opacity-80" width={20} height={20} loading="lazy" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">{t("contact.phoneWhats")}</dt>
                <dd className="mt-2">
                  <a className="text-lg font-semibold text-amber-400" href={`tel:${publicEnv.phoneTel}`}>
                    {publicEnv.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">{t("contact.emails")}</dt>
              <dd className="mt-2 space-y-1">
                <a className="block font-semibold text-white hover:text-amber-300" href={`mailto:${publicEnv.emailPrimary}`}>
                  {publicEnv.emailPrimary}
                </a>
                <a className="block font-semibold text-white/80 hover:text-amber-300" href={`mailto:${publicEnv.emailSecondary}`}>
                  {publicEnv.emailSecondary}
                </a>
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <dt className="sr-only">{t("contact.eyebrow")}</dt>
              <dd className="mt-3 space-y-2 text-white/90">
                <p>
                  <span className="text-white/50">{t("contact.phoneWhats")}</span>{" "}
                  <a className="font-semibold text-amber-400" href={`tel:${faleConoscoPage.phoneTel}`}>
                    {faleConoscoPage.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="text-white/50">{t("contact.emails")}</span>{" "}
                  <a className="font-semibold text-amber-400" href={`mailto:${faleConoscoPage.email}`}>
                    {faleConoscoPage.email}
                  </a>
                </p>
                <p className="flex flex-wrap items-center gap-2">
                  <img src={assets.iconHora} alt={t("a11y.clockIconAlt")} className="h-4 w-4 shrink-0 opacity-80" width={16} height={16} loading="lazy" />
                  <span className="text-white/50">{t("contact.hoursTitle")}</span> {t("contact.hours")}
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h3 className="font-serif text-2xl text-white">{t("contact.formTitle")}</h3>
          <form className="mt-6 space-y-5" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="contact-company">
              {t("contact.honeypot")}
            </label>
            <input
              id="contact-company"
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="pointer-events-none fixed left-[-120vw] top-0 h-px w-px opacity-0"
              aria-hidden
            />
            {[
              ["nome", fields[0], "text"],
              ["email", fields[1], "email"],
              ["telefone", fields[2], "tel"],
            ].map(([key, label, type]) => (
              <label key={key} className="block text-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">{label}</span>
                <input
                  required
                  type={type}
                  value={form[key]}
                  onChange={(e) => setForm((s) => ({ ...s, [key]: e.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none ring-amber-500/40 focus:ring-2"
                />
              </label>
            ))}
            <label className="block text-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">{fields[3]}</span>
              <textarea
                required
                rows={5}
                value={form.mensagem}
                onChange={(e) => setForm((s) => ({ ...s, mensagem: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none ring-amber-500/40 focus:ring-2"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-amber-600 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-amber-900/30 transition hover:bg-white hover:text-slate-900 disabled:opacity-60"
            >
              {status === "sending" ? t("contact.sending") : WEB3_KEY ? t("contact.submitWeb3") : t("contact.submitMailto")}
            </button>
            {status === "ok" ? <p className="text-center text-sm text-amber-300">{t("contact.success")}</p> : null}
            {status === "err" ? <p className="text-center text-sm text-red-300">{t("contact.error")}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
