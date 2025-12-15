import Link from "next/link";
import Image from "next/image";

interface BirdCardProps {
  id: string;
  name: string;
  species: string;
  imageUrl: string;
  description: string;
}

export default function BirdCard({
  id,
  name,
  species,
  imageUrl,
  description,
}: BirdCardProps) {
  return (
    <Link href={`/birds/${id}`}>
      <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-teal-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-teal-600 mb-3">{species}</p>
          <p className="text-slate-600 line-clamp-3">{description}</p>
          <div className="mt-4 text-teal-600 font-medium group-hover:translate-x-1 transition-transform inline-block">
            Meet {name} →
          </div>
        </div>
      </article>
    </Link>
  );
}
