import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Supported locales: English and Spanish (Spain)
  locales: ["en", "es"],

  // English is the default and served without a URL prefix (e.g. "/beverages"),
  // Spanish is served under "/es" (e.g. "/es/beverages").
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
