// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState, useEffect } from "react";
// import { Star, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { sl } from "date-fns/locale";

// const LeafletMap = dynamic(() => import("../map/leaflet-map"), { ssr: false });

// interface NeighborhoodData {
//   name: string;
//   city: string;
//   heroImage: string;
//   overview: {
//     medianHomePrice: string;
//     medianRent: string;
//     walkScore: number;
//     bikeScore: number;
//     transitScore: number;
//     quickFacts: string[];
//   };
//   photos: {
//     outdoors: string;
//     mainStreets: string;
//     sideStreets: string;
//     homeStyles: string;
//   };
//   exploreCategories: string[];
//   mapCenter: [number, number];
//   businesses: Record<
//     string,
//     Array<{
//       name: string;
//       lat: number;
//       lng: number;
//       type: string;
//     }>
//   >;
//   schools: Array<{
//     name: string;
//     type: string;
//     rating: number;
//     students: number;
//     grades: string;
//     isPublic: boolean;
//     parentRating: number;
//     greatSchoolRating: number;
//     description: string;
//     parentReview: {
//       name: string;
//       avatar: string;
//     };
//   }>;
//   agents: Array<{
//     name: string;
//     company: string;
//     rating: number;
//     reviews: number;
//     experience: string;
//     specialties: string[];
//     avatar: string;
//     contact: {
//       phone: string;
//       email: string;
//     };
//   }>;
//   homes: Array<{
//     id: number;
//     title: string;
//     price: string;
//     address: string;
//     beds: number;
//     baths: number;
//     sqft: string;
//     image: string;
//     type: string;
//   }>;
// }

// interface NeighborhoodDetailProps {
//   slug: any;
// }

// export function NeighborhoodDetail({ slug }: NeighborhoodDetailProps) {
//   const [data, setData] = useState<NeighborhoodData | null>(null);
//   const [activeCategory, setActiveCategory] = useState("Highlights");
//   const [activeTab, setActiveTab] = useState("Preschool");
//   const [homeTab, setHomeTab] = useState("Sale");
  

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const response = await fetch("/neighborhoods.json");
//         console.log(response,"response")
//         const neighborhoods = await response.json();
//         setData(neighborhoods[slug]);
//       } catch (error) {
//         console.error("Failed to load neighborhood data:", error);
//       }
//     };
//     loadData();
//   }, [slug]);

//   if (!data) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="flex gap-8 max-w-7xl mx-auto px-4 py-6">
//         {/* Main Content */}
//         <div className="flex-1 space-y-8">
//           {/* Hero Section */}
//           <div className="relative h-80 rounded-lg overflow-hidden">
//             <Image
// width={1000}
// height={1000}
//               src={data.heroImage || "/placeholder.svg"}
//               alt={data.name}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40" />
//             <div className="absolute bottom-6 left-6 text-white">
//               <p className="text-sm font-medium mb-2">{data.city}</p>
//               <h1 className="text-4xl font-bold">{data.name}</h1>
//             </div>
//           </div>

//           {/* Explore the Area */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold">Explore the Area</h2>

//             {/* Category Tabs */}
//             <div className="flex flex-wrap gap-2">
//               {data.exploreCategories.map((category) => (
//                 <Button
//                   key={category}
//                   variant={activeCategory === category ? "default" : "outline"}
//                   onClick={() => setActiveCategory(category)}
//                   className="rounded-full"
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </div>

//             {/* Map */}
//             <div className="h-96 rounded-lg overflow-hidden">
//               <LeafletMap
//                 center={data.mapCenter}
//                 businesses={data.businesses[activeCategory] || []}
//               />
//             </div>
//           </div>

//           {/* Schools Section */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold">Schools</h2>

//             <Tabs value={activeTab} onValueChange={setActiveTab}>
//               <TabsList>
//                 <TabsTrigger value="Preschool">Preschool</TabsTrigger>
//                 <TabsTrigger value="Elementary">Elementary</TabsTrigger>
//                 <TabsTrigger value="Middle">Middle</TabsTrigger>
//                 <TabsTrigger value="High">High</TabsTrigger>
//               </TabsList>

//               <TabsContent value="Elementary" className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {data.schools.map((school, index) => (
//                     <Card key={index}>
//                       <CardContent className="p-4">
//                         <div className="flex items-start justify-between mb-3">
//                           <div>
//                             <h3 className="font-semibold">{school.name}</h3>
//                             <p className="text-sm text-muted-foreground">
//                               {school.grades} •{" "}
//                               {school.isPublic ? "Public" : "Private"} •{" "}
//                               {school.students} Students
//                             </p>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                               {school.rating}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="space-y-2 mb-4">
//                           <div className="flex justify-between text-sm">
//                             <span>GreatSchool Rating</span>
//                             <span>{school.greatSchoolRating}/10</span>
//                           </div>
//                           <div className="flex justify-between text-sm">
//                             <span>Parent Rating Average</span>
//                             <div className="flex items-center gap-1">
//                               <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                               <span>{school.parentRating}</span>
//                             </div>
//                           </div>
//                         </div>

//                         <p className="text-sm text-muted-foreground mb-3">
//                           {school.description}
//                         </p>

//                         <div className="flex items-center gap-2">
//                           <Image
// width={1000}
// height={1000}
//                             src={
//                               school.parentReview.avatar || "/placeholder.svg"
//                             }
//                             alt="Parent"
//                             className="w-6 h-6 rounded-full"
//                           />
//                           <span className="text-sm text-muted-foreground">
//                             {school.parentReview.name}
//                           </span>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>

//           {/* Agents Section */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold">
//               Agents And Landlords Specializing in Attendance Zone
//             </h2>

//             <Tabs defaultValue="Agents">
//               <TabsList>
//                 <TabsTrigger value="Agents">Agents</TabsTrigger>
//                 <TabsTrigger value="Landlords">Landlords</TabsTrigger>
//               </TabsList>

//               <TabsContent value="Agents">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                   {data.agents.map((agent, index) => (
//                     <Card key={index}>
//                       <CardContent className="p-4 text-center">
//                         <Image
// width={1000}
// height={1000}
//                           src={agent.avatar || "/placeholder.svg"}
//                           alt={agent.name}
//                           className="w-20 h-20 rounded-full mx-auto mb-3"
//                         />
//                         <div className="flex items-center justify-center gap-1 mb-2">
//                           <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                           <span className="font-semibold">{agent.rating}</span>
//                           <span className="text-sm text-muted-foreground">
//                             ({agent.reviews} reviews)
//                           </span>
//                         </div>
//                         <h3 className="font-semibold mb-1">{agent.name}</h3>
//                         <p className="text-sm text-muted-foreground mb-2">
//                           {agent.company}
//                         </p>
//                         <p className="text-sm mb-2">
//                           Years of experience: {agent.experience}
//                         </p>
//                         <p className="text-sm mb-3">
//                           Specialties: {agent.specialties.join(", ")}
//                         </p>
//                         <div className="flex gap-2 justify-center">
//                           <Button size="sm" variant="outline">
//                             📞
//                           </Button>
//                           <Button size="sm" variant="outline">
//                             ✉️
//                           </Button>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>

//           {/* Homes Section */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold">Homes for Sale And Rent</h2>

//             <Tabs value={homeTab} onValueChange={setHomeTab}>
//               <TabsList>
//                 <TabsTrigger value="Sale">Sale</TabsTrigger>
//                 <TabsTrigger value="Rent">Rent</TabsTrigger>
//               </TabsList>

//               <TabsContent value="Sale">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {data.homes
//                     .filter((home) => home.type === "sale")
//                     .map((home) => (
//                       <Card key={home.id} className="overflow-hidden">
//                         <div className="relative">
//                           <Image
//                             width={1000}
//                             height={1000}
//                             src={home.image || "/placeholder.svg"}
//                             alt={home.title}
//                             className="w-full h-48 object-cover"
//                           />
//                           <Button
//                             size="sm"
//                             variant="secondary"
//                             className="absolute top-3 right-3"
//                           >
//                             <Heart className="w-4 h-4" />
//                           </Button>
//                         </div>
//                         <CardContent className="p-4">
//                           <div className="flex items-center gap-2 mb-2">
//                             <Badge
//                               variant="secondary"
//                               className="bg-yellow-100 text-yellow-800"
//                             >
//                               9.8
//                             </Badge>
//                             <span className="text-sm font-semibold text-blue-600">
//                               {home.title}
//                             </span>
//                           </div>
//                           <p className="text-sm text-muted-foreground mb-2">
//                             {home.address}
//                           </p>
//                           <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
//                             <span>🛏️ {home.beds} bedrooms</span>
//                             <span>🛁 {home.baths} bathrooms</span>
//                             <span>👥 {home.sqft}</span>
//                           </div>
//                           <p className="text-lg font-bold">{home.price}</p>
//                         </CardContent>
//                       </Card>
//                     ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="w-80 space-y-6">
//           {/* Neighborhood Overview */}
//           <Card>
//             <CardContent className="p-6">
//               <h3 className="text-lg font-semibold mb-4">
//                 Neighborhood Overview
//               </h3>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                   <div className="flex-1">
//                     <div className="flex justify-between">
//                       <span className="text-sm">For Sale</span>
//                       <span className="text-sm font-semibold">
//                         {data.overview.medianHomePrice}
//                       </span>
//                     </div>
//                     <p className="text-xs text-muted-foreground">
//                       Median - $5.4M
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   <div className="flex-1">
//                     <div className="flex justify-between">
//                       <span className="text-sm">For Rent</span>
//                       <span className="text-sm font-semibold">
//                         {data.overview.medianRent}
//                       </span>
//                     </div>
//                     <p className="text-xs text-muted-foreground">
//                       Median - $7K
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 space-y-3">
//                 <h4 className="font-medium">Map</h4>
//                 <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
//                   <span className="text-sm text-muted-foreground">
//                     Interactive Map
//                   </span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* All Photos */}
//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-semibold">All Photos</h3>
//                 <span className="text-sm text-muted-foreground">+38</span>
//               </div>

//               <div className="grid grid-cols-2 gap-2">
//                 <div className="space-y-2">
//                   <div className="relative">
//                     <Image
//                     width={1000}
//                     height={1000}
//                       src={data.photos.outdoors || "/placeholder.svg"}
//                       alt="Outdoors"
//                       className="w-full h-20 object-cover rounded"
//                     />
//                     <span className="absolute bottom-1 left-1 text-xs text-white bg-black/50 px-1 rounded">
//                       Outdoors
//                     </span>
//                   </div>
//                   <div className="relative">
//                     <Image
//                     width={1000}
//                     height={1000}
//                       src={data.photos.sideStreets || "/placeholder.svg"}
//                       alt="Side Streets"
//                       className="w-full h-20 object-cover rounded"
//                     />
//                     <span className="absolute bottom-1 left-1 text-xs text-white bg-black/50 px-1 rounded">
//                       Side Streets
//                     </span>
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="relative">
//                     <Image
//                     width={1000}
//                     height={1000}
//                       src={data.photos.mainStreets || "/placeholder.svg"}
//                       alt="Main Streets"
//                       className="w-full h-20 object-cover rounded"
//                     />
//                     <span className="absolute bottom-1 left-1 text-xs text-white bg-black/50 px-1 rounded">
//                       Main Streets
//                     </span>
//                   </div>
//                   <div className="relative">
//                     <Image
//                     width={1000}
//                     height={1000}
//                       src={data.photos.homeStyles || "/placeholder.svg"}
//                       alt="Home Styles"
//                       className="w-full h-20 object-cover rounded"
//                     />
//                     <span className="absolute bottom-1 left-1 text-xs text-white bg-black/50 px-1 rounded">
//                       Home Styles
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const NeighborhoodDetail = () => {  
  return (
    <div>neiborhood</div>
  )
}

export default  NeighborhoodDetail; 