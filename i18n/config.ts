export const locales = [
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
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  hi: "हिन्दी",
  id: "Indonesia",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  pl: "Polski",
  pt: "Português",
  th: "ไทย",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  zh: "中文",
};

// RTL languages
export const rtlLocales: Locale[] = ["ar"];

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
