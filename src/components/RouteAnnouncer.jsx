import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSeo } from "../config/routes.js";

export function RouteAnnouncer() {
  const { pathname } = useLocation();
  const [announce, setAnnounce] = useState("");
  useEffect(() => {
    const { title } = getSeo(pathname);
    setAnnounce(title);
  }, [pathname]);
  return (
    <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
      {announce}
    </div>
  );
}
