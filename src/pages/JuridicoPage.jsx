import { PaginaDetalhe } from "../components/PaginaDetalhe.jsx";
import { ServiceSections } from "../components/ServicoBody.jsx";
import { meioAmbientePage } from "../content/verbatim.js";
import { assets } from "../config/assetsConfig.js";
import { useTranslation } from "../i18n.jsx";

export default function JuridicoPage() {
  const { t } = useTranslation();
  return (
    <PaginaDetalhe heroSrc={assets.juridico} title={t("juridico.title")} subtitle={t("juridico.subtitle")} sourceUrl={null}>
      {t("juridico.envNote") ? <p className="mb-6 text-sm italic text-slate-600 dark:text-slate-400">{t("juridico.envNote")}</p> : null}
      <ServiceSections page={meioAmbientePage} />
      <h2 className="mt-14 font-serif text-2xl text-slate-900 dark:text-slate-100">{t("juridico.privacy")}</h2>
      <div className="mt-4 whitespace-pre-line text-slate-700 dark:text-slate-300">{t("juridico.privacyBody")}</div>
      <h2 className="mt-14 font-serif text-2xl text-slate-900 dark:text-slate-100">{t("juridico.terms")}</h2>
      <div className="mt-4 whitespace-pre-line text-slate-700 dark:text-slate-300">{t("juridico.termsBody")}</div>
    </PaginaDetalhe>
  );
}
