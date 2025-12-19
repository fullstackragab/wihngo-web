"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { QRCodeSVG } from "qrcode.react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOLANA_WALLET_ADDRESS = "AE6jndedpjoX2XLt4nFYGp3JEuHTseGh8EMDGRmADacn";

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const t = useTranslations("donation");
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SOLANA_WALLET_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
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

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animation-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          aria-label={t("close")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 pt-12">
          {/* Title */}
          <h2
            id="donation-modal-title"
            className="text-2xl font-bold text-slate-800 text-center mb-4"
          >
            {t("title")}
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-center mb-6">
            {t("description")}
          </p>

          {/* Accepted tokens */}
          <div className="bg-teal-50 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-slate-800 mb-2">
              {t("acceptedTokens")}
            </h3>
            <ul className="space-y-1">
              <li className="flex items-center text-slate-700">
                <span className="text-teal-500 mr-2">✓</span>
                USDC ({t("solana")})
              </li>
              <li className="flex items-center text-slate-700">
                <span className="text-teal-500 mr-2">✓</span>
                SOL ({t("solana")})
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
              {t("walletAddress")}
            </label>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-slate-100 px-3 py-2 rounded-lg text-sm font-mono text-slate-800 break-all select-all">
                {SOLANA_WALLET_ADDRESS}
              </code>
              <button
                onClick={handleCopy}
                className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  copied
                    ? "bg-teal-500 text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {copied ? t("copied") : t("copy")}
              </button>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div className="flex items-start">
              <span className="text-amber-500 mr-2 mt-0.5">⚠️</span>
              <p className="text-sm text-amber-800">
                {t("warning")}
              </p>
            </div>
          </div>

          {/* Helpful message */}
          <p className="text-center text-slate-500 text-sm mb-4">
            {t("helpMessage")}
          </p>

          {/* Thank you */}
          <p className="text-center text-teal-600 font-medium">
            {t("thankYou")}
          </p>
        </div>
      </div>
    </div>
  );
}
