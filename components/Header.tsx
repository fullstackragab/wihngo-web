"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-teal-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/icon.png"
              alt="Wihngo"
              width={40}
              height={40}
              className="transition-transform group-hover:scale-110"
            />
            <span className="text-2xl font-bold text-slate-800">Wihngo</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/stories"
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              {t("stories")}
            </Link>
            <Link
              href="/why-birds-matter"
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              {t("whyBirdsMatter")}
            </Link>
            <Link
              href="/about"
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              {t("about")}
            </Link>
            <LanguageSwitcher />
            <Link
              href="#download"
              className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors"
            >
              {t("downloadApp")}
            </Link>
          </div>

          <button
            className="md:hidden text-slate-600"
            aria-label={t("menu")}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-teal-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/stories"
                className="text-slate-600 hover:text-teal-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("stories")}
              </Link>
              <Link
                href="/why-birds-matter"
                className="text-slate-600 hover:text-teal-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("whyBirdsMatter")}
              </Link>
              <Link
                href="/about"
                className="text-slate-600 hover:text-teal-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <div className="px-2 py-1">
                <LanguageSwitcher />
              </div>
              <Link
                href="#download"
                className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors text-center mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("downloadApp")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
