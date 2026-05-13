import { PaginaDetalhe } from "../components/PaginaDetalhe.jsx";
import { ServiceSections } from "../components/ServicoBody.jsx";
import { meioAmbientePage } from "../content/verbatim.js";
import { politicaPrivacidade, termosDeUso } from "../content/legal.js";
import { assets } from "../config/assetsConfig.js";
import { useI18n } from "../i18n.jsx";

export default function JuridicoPage() {
  const { t } = useI18n();
  return (
    <PaginaDetalhe heroSrc={assets.juridico} title={t("juridico.title")} subtitle={t("juridico.subtitle")} sourceUrl={null}>
      <ServiceSections page={meioAmbientePage} />
      <h2 className="mt-14 font-serif text-2xl text-slate-900 dark:text-slate-100">{t("juridico.privacy")}</h2>
      <div className="mt-4 whitespace-pre-line text-slate-700 dark:text-slate-300">{politicaPrivacidade}</div>
      <h2 className="mt-14 font-serif text-2xl text-slate-900 dark:text-slate-100">{t("juridico.terms")}</h2>
      <div className="mt-4 whitespace-pre-line text-slate-700 dark:text-slate-300">{termosDeUso}</div>
    </PaginaDetalhe>
  );
}
