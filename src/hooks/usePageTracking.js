import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-RGX7V5SVPQ", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}
