"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { QRCodeSVG } from "qrcode.react";
import DownloadSection from "@/components/DownloadSection";

const SOLANA_WALLET_ADDRESS = "AE6jndedpjoX2XLt4nFYGp3JEuHTseGh8EMDGRmADacn";

export default function SupportPageContent() {
  const t = useTranslations("supportPage");
  const tDonation = useTranslations("donation");
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SOLANA_WALLET_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = SOLANA_WALLET_ADDRESS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-teal-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Emotional Content */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            {t("emotionalParagraph1")}
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            {t("emotionalParagraph2")}
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            {t("emotionalParagraph3")}
          </p>
        </div>
      </section>

      {/* What You Are Supporting Right Now Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-slate-800 text-center">
            {tDonation("currentSupportTitle")}
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            {tDonation("currentSupportIntro")}
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            {tDonation("currentSupportExplanation")}
          </p>

          <div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              {tDonation("currentSupportContributes")}
            </p>

            <ul className="space-y-3 pl-4">
              <li className="flex items-start text-lg text-slate-700 leading-relaxed">
                <span className="text-teal-500 mr-3 mt-1">•</span>
                {tDonation("currentSupportItem1")}
              </li>
              <li className="flex items-start text-lg text-slate-700 leading-relaxed">
                <span className="text-teal-500 mr-3 mt-1">•</span>
                {tDonation("currentSupportItem2")}
              </li>
              <li className="flex items-start text-lg text-slate-700 leading-relaxed">
                <span className="text-teal-500 mr-3 mt-1">•</span>
                {tDonation("currentSupportItem3")}
              </li>
            </ul>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed italic">
            {tDonation("currentSupportConclusion")}
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-4">
              {tDonation("title")}
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-center mb-6">
              {tDonation("description")}
            </p>

            {/* Accepted tokens */}
            <div className="bg-teal-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-slate-800 mb-2">
                {tDonation("acceptedTokens")}
              </h3>
              <ul className="space-y-1">
                <li className="flex items-center text-slate-700">
                  <span className="text-teal-500 mr-2">✓</span>
                  USDC ({tDonation("solana")})
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="text-teal-500 mr-2">✓</span>
                  SOL ({tDonation("solana")})
                </li>
              </ul>
            </div>

            {/* QR Code */}
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-xl border-2 border-slate-200">
                <QRCodeSVG
                  value={SOLANA_WALLET_ADDRESS}
                  size={180}
                  level="H"
                  includeMargin={false}
                />
              </div>
            </div>

            {/* Wallet Address */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {tDonation("walletAddress")}
              </label>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-slate-100 px-3 py-2 rounded-lg text-sm font-mono text-slate-800 break-all select-all">
                  {SOLANA_WALLET_ADDRESS}
                </code>
                <button
                  onClick={handleCopy}
                  className={`shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    copied
                      ? "bg-teal-500 text-white"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  {copied ? tDonation("copied") : tDonation("copy")}
                </button>
              </div>
            </div>

            {/* Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <div className="flex items-start">
                <span className="text-amber-500 mr-2 mt-0.5">⚠️</span>
                <p className="text-sm text-amber-800">{tDonation("warning")}</p>
              </div>
            </div>

            {/* Helpful message */}
            <p className="text-center text-slate-500 text-sm mb-4">
              {tDonation("helpMessage")}
            </p>

            {/* Thank you */}
            <p className="text-center text-teal-600 font-medium">
              {tDonation("thankYou")}
            </p>
          </div>

          <p className="mt-6 text-center text-slate-600">{t("thankYouNote")}</p>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
