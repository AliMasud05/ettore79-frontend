import Image from "next/image";
import Link from "next/link";

interface NeighborhoodCardProps {
  name: string;
  city: string;
  image: string;
}

export function NeighborhoodCard({ name, city, image }: NeighborhoodCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} neighborhood`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* City label */}
        <div className="absolute top-3 left-3">
          <span className="bg-black/60 text-white text-sm px-2 py-1 rounded">
            {city}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div />
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <Link
              href={`/neighborhood/${name.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm underline hover:no-underline transition-all"
            >
              View Neighborhood
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
