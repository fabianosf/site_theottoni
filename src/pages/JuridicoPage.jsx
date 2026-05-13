import { PaginaDetalhe } from "../components/PaginaDetalhe.jsx";
import { ServiceSections } from "../components/ServicoBody.jsx";
import { meioAmbientePage } from "../content/verbatim.js";
import { politicaPrivacidade, termosDeUso } from "../content/legal.js";
import { assets } from "../config/assetsConfig.js";

export default function JuridicoPage() {
  return (
    <PaginaDetalhe heroSrc={assets.juridico} title="Documentação, contratos e licenciamento" subtitle="Jurídico" sourceUrl={null}>
      <ServiceSections page={meioAmbientePage} />
      <h2 className="mt-14 font-serif text-2xl text-slate-900">Política de Privacidade</h2>
      <div className="mt-4 whitespace-pre-line text-slate-700">{politicaPrivacidade}</div>
      <h2 className="mt-14 font-serif text-2xl text-slate-900">Termos de Uso</h2>
      <div className="mt-4 whitespace-pre-line text-slate-700">{termosDeUso}</div>
    </PaginaDetalhe>
  );
}
