import { NeighborhoodCard } from "../card/neighborhood-card";
import neiborhood1 from "@/assets/neiborhood/neiborhood1.png";
import neiborhood2 from "@/assets/neiborhood/neiborhood2.png";

const neighborhoods = [
  {
    id: 1,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood1.src,
  },
  {
    id: 2,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood2.src,
  },
  {
    id: 3,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood1.src,
  },
  {
    id: 4,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood2.src,
  },
  {
    id: 5,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood1.src,
  },
  {
    id: 6,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood1.src,
  },
  {
    id: 7,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood1.src,
  },
  {
    id: 8,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood2.src,
  },
  {
    id: 9,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood1.src,
  },
  {
    id: 10,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood2.src,
  },
  {
    id: 11,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood1.src,
  },
  {
    id: 12,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood2.src,
  },
  {
    id: 13,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood1.src,
  },
  {
    id: 14,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood1.src,
  },
  {
    id: 15,
    name: "Old West Austin",
    city: "Austin TX",
    image: neiborhood2.src,
  },
];

export function NeighborhoodsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {neighborhoods.map((neighborhood) => (
        <NeighborhoodCard
          key={neighborhood.id}
          name={neighborhood.name}
          city={neighborhood.city}
          image={neighborhood.image}
        />
      ))}
    </div>
  );
}
