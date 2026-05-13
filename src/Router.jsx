import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Shell } from "./components/Shell.jsx";

const HomeOnePage = lazy(() => import("./pages/HomeOnePage.jsx"));
const JuridicoPage = lazy(() => import("./pages/JuridicoPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<HomeOnePage />} />
        <Route path="sobre" element={<HomeOnePage />} />
        <Route path="servicos" element={<HomeOnePage />} />
        <Route path="projetos" element={<HomeOnePage />} />
        <Route path="contato" element={<HomeOnePage />} />
        <Route path="juridico" element={<JuridicoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
