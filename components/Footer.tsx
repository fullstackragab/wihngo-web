"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import DonationButton from "@/components/DonationButton";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/icon.png"
                alt="Wihngo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-slate-800">Wihngo</span>
            </div>
            <p className="text-slate-600 mb-4">{t("tagline")}</p>
            <DonationButton variant="outline" size="sm" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-4">{t("explore")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/stories"
                  className="text-slate-600 hover:text-teal-600 transition-colors"
                >
                  {tNav("stories")}
                </Link>
              </li>
              <li>
                <Link
                  href="/why-birds-matter"
                  className="text-slate-600 hover:text-teal-600 transition-colors"
                >
                  {tNav("whyBirdsMatter")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-teal-600 transition-colors"
                >
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-slate-600 hover:text-teal-600 transition-colors"
                >
                  {tNav("support")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-4">{t("download")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#download"
                  className="text-slate-600 hover:text-teal-600 transition-colors"
                >
                  {t("android")}
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-slate-600 hover:text-teal-600 transition-colors"
                >
                  {t("ios")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-300 mt-8 pt-8 text-center text-sm text-slate-500">
          <div className="flex justify-center items-center gap-2 flex-wrap mb-4">
            <Link
              href="/privacy"
              className="hover:text-teal-600 transition-colors"
            >
              {t("privacyPolicy")}
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-teal-600 transition-colors"
            >
              {t("terms")}
            </Link>
            <span>·</span>
            <Link
              href="/contact"
              className="hover:text-teal-600 transition-colors"
            >
              {t("contact")}
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <p className="mt-2">
            <a
              href="https://www.freepik.com/icon/bird_3069186"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors"
            >
              Bird icon by Freepik
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
