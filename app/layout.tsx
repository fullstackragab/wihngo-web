import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wihngo.com"),
  title: {
    default:
      "Wihngo - A love-centric community for people who care about birds",
    template: "%s | Wihngo",
  },
  description:
    "Wihngo is a love-centric community for people who care about birds. A place where bird stories are shared, connections are formed, and support is given with care.",
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
      { url: "/icon.png", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/splash-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wihngo.com",
    siteName: "Wihngo",
    title: "Wihngo - A love-centric community for people who care about birds",
    description:
      "A love-centric community for people who care about birds. A place where bird stories are shared, connections are formed, and support is given with care.",
    images: [
      {
        url: "/splash-icon.png",
        width: 1200,
        height: 1200,
        alt: "Wihngo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wihngo - Where Hearts & Wings Gather",
    description: "A love-centric community platform for bird lovers.",
    images: ["/splash-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
