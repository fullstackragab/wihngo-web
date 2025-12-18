import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Image
          src="/icon.png"
          alt="Loading"
          width={64}
          height={64}
          className="animate-bounce mb-4 mx-auto"
        />
        <p className="text-slate-600">Loading...</p>
      </div>
    </div>
  );
}
