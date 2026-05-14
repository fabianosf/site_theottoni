import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Shell } from "./components/Shell.jsx";
import { ROUTE_DEFS } from "./config/routes.js";

const HomeOnePage = lazy(() => import("./pages/HomeOnePage.jsx"));
const JuridicoPage = lazy(() => import("./pages/JuridicoPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function routeSegment(abs) {
  if (!abs || abs === "/") return null;
  return abs.replace(/^\//, "");
}

export function AppRoutes() {
  const childRoutes = ROUTE_DEFS.flatMap((d) => {
    if (d.labelKey === "home") return [];
    const El = d.labelKey === "legal" ? JuridicoPage : HomeOnePage;
    const segments = [...new Set([d.pt, d.en].map(routeSegment).filter(Boolean))];
    return segments.map((seg) => <Route key={`${d.labelKey}-${seg}`} path={seg} element={<El />} />);
  });
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<HomeOnePage />} />
        {childRoutes}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
