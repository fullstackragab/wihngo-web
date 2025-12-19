"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import DonationModal from "./DonationModal";

interface DonationButtonProps {
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function DonationButton({
  variant = "secondary",
  size = "md",
  className = "",
}: DonationButtonProps) {
  const t = useTranslations("donation");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 rounded-full",
    secondary:
      "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500 rounded-full",
    outline:
      "border-2 border-teal-500 text-teal-700 hover:bg-teal-50 focus:ring-teal-500 rounded-full",
    link: "text-teal-600 hover:text-teal-700 underline-offset-2 hover:underline",
  };

  const sizes = {
    sm: variant === "link" ? "text-sm" : "px-4 py-2 text-sm",
    md: variant === "link" ? "text-base" : "px-6 py-3 text-base",
    lg: variant === "link" ? "text-lg" : "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className={classes}>
        {t("buttonText")}
      </button>
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
