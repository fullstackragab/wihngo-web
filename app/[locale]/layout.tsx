import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = messages.metadata;

  return {
    metadataBase: new URL("https://wihngo.com"),
    title: {
      default: t.title,
      template: t.titleTemplate,
    },
    description: t.description,
    keywords: [
      "birds",
      "bird lovers",
      "pet birds",
      "bird community",
      "bird care",
      "parrots",
      "bird stories",
    ],
    authors: [{ name: "Wihngo" }],
    icons: {
      icon: [
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/splash-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: "https://wihngo.com",
      siteName: "Wihngo",
      title: t.title,
      description: t.description,
      images: [
        {
          url: "https://wihngo.com/icon.png",
          width: 512,
          height: 512,
          alt: "Wihngo - Bird Community",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: t.twitterTitle,
      description: t.twitterDescription,
      images: ["https://wihngo.com/icon.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// RTL locales
const rtlLocales = ["ar"];

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
