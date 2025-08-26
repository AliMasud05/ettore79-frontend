// "use client";

// import { Button } from "@/components/ui/button";
// import dynamic from "next/dynamic";
// import { useState } from "react";

// const MapComponent = dynamic(() => import("../map/leaflet-map"), {
//   ssr: false,
//   loading: () => (
//     <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
//       <div className="text-gray-500">Loading map...</div>
//     </div>
//   ),
// });

// export function ExploreArea() {
//   const [activeCategory, setActiveCategory] = useState("Highlights");

//   const categories = [
//     "Highlights",
//     "Restaurants",
//     "Groceries",
//     "Nightlife",
//     "Cafes",
//     "Shopping",
//     "Arts and Entertainment",
//     "Fitness",
//   ];

//   return (
//     <div className="mb-12">
//       <h2 className="text-2xl font-bold mb-6">Explore the Area</h2>

//       {/* Category Tabs */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {categories.map((category) => (
//           <Button
//             key={category}
//             variant={activeCategory === category ? "default" : "outline"}
//             size="sm"
//             className={
//               activeCategory === category
//                 ? "bg-orange-500 hover:bg-orange-600"
//                 : ""
//             }
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </Button>
//         ))}
//       </div>

//       <div className="h-96 rounded-lg overflow-hidden">
//         <MapComponent activeCategory={activeCategory} />
//       </div>
//     </div>
//   );
// }
