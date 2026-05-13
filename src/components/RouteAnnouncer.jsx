import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { seoFor, useI18n } from "../i18n.jsx";

export function RouteAnnouncer() {
  const { pathname } = useLocation();
  const { lang } = useI18n();
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
