import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { seoFor, useTranslation } from "../i18n.jsx";

export function RouteAnnouncer() {
  const { pathname } = useLocation();
  const { lang } = useTranslation();
  const [announce, setAnnounce] = useState("");
  useEffect(() => {
    const { title } = seoFor(pathname, lang);
    setAnnounce(title);
  }, [pathname, lang]);
  return (
    <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
      {announce}
    </div>
  );
}
