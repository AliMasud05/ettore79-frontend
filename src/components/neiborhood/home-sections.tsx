import { Heart, Bed, Bath, Square } from "lucide-react";
import Image from "next/image";

export function HomesSection() {
  const properties = [
    {
      id: 1,
      title: "Serenity at Whispering Pines Retreat",
      price: "$1,200,000",
      address: "3407 Ranchview Dr. Richardson, California",
      beds: 3,
      baths: 2,
      sqft: "4 Guest",
      image: "/modern-luxury-home-exterior-with-large-windows-and.png",
    },
    {
      id: 2,
      title: "Serenity at Whispering Pines Retreat",
      price: "$1,200,000",
      address: "3407 Ranchview Dr. Richardson, California",
      beds: 3,
      baths: 2,
      sqft: "4 Guest",
      image: "/contemporary-home-with-glass-walls-and-mountain-vi.png",
    },
    {
      id: 3,
      title: "Serenity at Whispering Pines Retreat",
      price: "$1,200,000",
      address: "3407 Ranchview Dr. Richardson, California",
      beds: 3,
      baths: 2,
      sqft: "4 Guest",
      image: "/luxury-modern-house-with-pool-and-landscaping.png",
    },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Homes for Sale And Rent</h2>

      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-orange-100 text-orange-600 rounded-lg text-sm font-medium">
          Sale
        </button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
          Rent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg border overflow-hidden"
          >
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white">
                <Heart className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">
                4.9
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold mb-2 text-blue-600">
                {property.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{property.address}</p>
              <p className="text-lg font-bold text-green-600 mb-3">
                {property.price}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.beds} Bedrooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.baths} Bathrooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="w-4 h-4" />
                  <span>{property.sqft}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
