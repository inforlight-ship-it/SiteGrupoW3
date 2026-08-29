import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackEvent, trackPageView } from "../lib/analytics";

function labelFromElement(element: Element | null) {
  return element?.textContent?.replace(/\s+/g, " ").trim().slice(0, 80) || undefined;
}

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      trackPageView(`${location.pathname}${location.search}`, document.title);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;

      const anchor = target.closest("a");
      const button = target.closest("button");

      if (anchor) {
        const rawHref = anchor.getAttribute("href") || "";

        if (rawHref.includes("wa.me") || rawHref.includes("api.whatsapp.com")) {
          trackEvent("whatsapp_click", { source_path: location.pathname, label: labelFromElement(anchor) });
          return;
        }

        if (rawHref.startsWith("tel:")) {
          trackEvent("phone_click", { source_path: location.pathname });
          return;
        }

        if (rawHref.startsWith("mailto:")) {
          trackEvent("email_click", { source_path: location.pathname });
          return;
        }

        if (rawHref.startsWith("/cases/")) {
          trackEvent("case_open", { source_path: location.pathname, case_path: rawHref });
        }
      }

      if (button) {
        const label = labelFromElement(button)?.toLocaleLowerCase("pt-BR") || "";
        if (label.includes("diagnóstico") || label.includes("avaliacao") || label.includes("avaliação")) {
          trackEvent("diagnostic_cta_click", { source_path: location.pathname, label: labelFromElement(button) });
        }
      }
    };

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null;
      if (form?.classList.contains("w3-contact-form")) {
        trackEvent("contact_form_submit", { source_path: location.pathname });
      }
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, [location.pathname]);

  return null;
}
