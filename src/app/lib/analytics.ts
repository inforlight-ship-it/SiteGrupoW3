type AnalyticsParams = Record<string, string | number | boolean | undefined>;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

const env = import.meta.env as Record<string, string | undefined>;
const GTM_ID = env.VITE_GTM_ID?.trim();
const GA_MEASUREMENT_ID = env.VITE_GA_MEASUREMENT_ID?.trim();

let initialized = false;

function getAnalyticsWindow() {
  return window as AnalyticsWindow;
}

function ensureDataLayer() {
  const analyticsWindow = getAnalyticsWindow();
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  return analyticsWindow.dataLayer;
}

function ensureGtag() {
  const analyticsWindow = getAnalyticsWindow();
  ensureDataLayer();

  if (!analyticsWindow.gtag) {
    analyticsWindow.gtag = (...args: unknown[]) => {
      analyticsWindow.dataLayer?.push(args);
    };
  }

  return analyticsWindow.gtag;
}

function injectScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  if (!GTM_ID && !GA_MEASUREMENT_ID) return;

  const gtag = ensureGtag();

  // Default privacy posture. AdOpt / Google Consent Mode can update these values
  // after the visitor records a choice in the consent manager.
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });

  if (GTM_ID) {
    ensureDataLayer().push({
      "gtm.start": Date.now(),
      event: "gtm.js",
    });
    injectScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`, "w3-gtm");
    return;
  }

  if (GA_MEASUREMENT_ID) {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`, "w3-ga4");
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true,
    });
  }
}

export function trackPageView(path: string, title: string) {
  if (typeof window === "undefined" || (!GTM_ID && !GA_MEASUREMENT_ID)) return;

  if (GTM_ID) {
    ensureDataLayer().push({
      event: "page_view",
      page_path: path,
      page_title: title,
      page_location: window.location.href,
    });
    return;
  }

  ensureGtag()("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || (!GTM_ID && !GA_MEASUREMENT_ID)) return;

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );

  if (GTM_ID) {
    ensureDataLayer().push({ event: name, ...cleanParams });
    return;
  }

  ensureGtag()("event", name, cleanParams);
}

export function analyticsConfiguration() {
  return {
    enabled: Boolean(GTM_ID || GA_MEASUREMENT_ID),
    mode: GTM_ID ? "gtm" : GA_MEASUREMENT_ID ? "ga4" : "disabled",
  } as const;
}
