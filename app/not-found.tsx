import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🐦</div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
          This bird has flown away. Let's get you back to familiar territory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            Go Home
          </Button>
          <Button href="/stories" variant="outline">
            Read Stories
          </Button>
        </div>
      </div>
    </main>
  );
}
