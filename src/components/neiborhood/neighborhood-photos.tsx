import Image from "next/image";

export function NeighborhoodPhotos() {
  const photos = [
    { category: "Outdoors", image: "/austin-outdoor-park-scene.png" },
    { category: "Main Streets", image: "/austin-main-street-with-shops.png" },
    { category: "Side Streets", image: "/austin-residential-side-street.png" },
    { category: "Home Styles", image: "/austin-home-architecture-styles.png" },
  ];

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">All Photos</h2>
        <span className="text-sm text-gray-500">38</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            <Image
width={1000}
height={1000}
              src={photo.image || "/placeholder.svg"}
              alt={photo.category}
              className="w-full h-20 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg" />
            <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
              {photo.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
