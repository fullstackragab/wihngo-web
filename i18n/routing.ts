import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [
    "en",
    "ar",
    "de",
    "es",
    "fr",
    "hi",
    "id",
    "it",
    "ja",
    "ko",
    "pl",
    "pt",
    "th",
    "tr",
    "vi",
    "zh",
  ],

  // Used when no locale matches
  defaultLocale: "en",

  // Always use locale prefix for static export
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
