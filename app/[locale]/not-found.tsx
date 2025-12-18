import { useTranslations } from "next-intl";
import Button from "@/components/Button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🐦</div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            {t("goHome")}
          </Button>
          <Button href="/stories" variant="outline">
            {t("readStories")}
          </Button>
        </div>
      </div>
    </main>
  );
}
