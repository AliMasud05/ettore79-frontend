// import React from 'react'

// const demo = () => {
//   return (
//     <div>
//       <div className="flex gap-8 max-w-7xl mx-auto px-4 py-6">
//         <div className="flex-1">
//           <div className="max-w-7xl mx-auto p-6 bg-white">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Left Side - Hero Image */}
//               <div className="relative">
//                 <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden">
//                   <Image
//                     src={vista.src}
//                     alt="Old West Austin neighborhood view"
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
//                     Austin TX
//                   </div>
//                   <div className="absolute bottom-4 left-4">
//                     <h1 className="text-white text-3xl font-bold">
//                       Old West Austin
//                     </h1>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side - Content */}
//               <div className="space-y-6">
//                 {/* Neighborhood Overview */}
//                 <div>
//                   <h2 className="text-2xl font-bold mb-4">
//                     Neighborhood Overview
//                   </h2>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex items-center gap-2">
//                       <DollarSign className="w-5 h-5 text-gray-600" />
//                       <div>
//                         <p className="text-sm text-gray-600">Buy:</p>
//                         <p className="font-semibold">$170K - $5.4M</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Home className="w-5 h-5 text-gray-600" />
//                       <div>
//                         <p className="text-sm text-gray-600">
//                           For Buy On Alky.mx
//                         </p>
//                         <p className="text-blue-600 text-sm">For Homes</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <DollarSign className="w-5 h-5 text-gray-600" />
//                       <div>
//                         <p className="text-sm text-gray-600">Rent:</p>
//                         <p className="font-semibold">$800K - $12K</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Home className="w-5 h-5 text-gray-600" />
//                       <div>
//                         <p className="text-sm text-gray-600">
//                           For Rent On Alky.mx
//                         </p>
//                         <p className="text-blue-600 text-sm">For Homes</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Map Section */}
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Map</h3>
//                   <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
//                     <Image
//                       src="/neighborhood-map-with-streets-and-landmarks.png"
//                       alt="Old West Austin map"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* All Photos Section */}
//                 <div>
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-semibold">All Photos</h3>
//                     <span className="bg-black text-white px-2 py-1 rounded text-sm">
//                       +38
//                     </span>
//                   </div>
//                   <div className="relative h-32 rounded-lg overflow-hidden">
//                     <Image
//                       src="/colorful-modern-buildings-and-green-spaces.png"
//                       alt="Neighborhood photos"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Category Grid */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <h4 className="font-medium mb-2">Outdoors</h4>
//                     <div className="relative h-20 rounded-lg overflow-hidden">
//                       <Image
//                         src="/outdoor-park-with-mountains-in-background.png"
//                         alt="Outdoors"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="font-medium mb-2">Main Streets</h4>
//                     <div className="relative h-20 rounded-lg overflow-hidden">
//                       <Image
//                         src="/placeholder-1bqdr.png"
//                         alt="Main Streets"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="font-medium mb-2">Side Streets</h4>
//                     <div className="relative h-20 rounded-lg overflow-hidden">
//                       <Image
//                         src="/placeholder-vi6hc.png"
//                         alt="Side Streets"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="font-medium mb-2">Home Styles</h4>
//                     <div className="relative h-20 rounded-lg overflow-hidden">
//                       <Image
//                         src="/placeholder-c6104.png"
//                         alt="Home Styles"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <ExploreArea /> */}
//           <SchoolsSection />
//           <AgentsSection />
//           <HomesSection />
//         </div>

//         <div className="w-80 space-y-6">
//           <NeighborhoodOverview />
//           <NeighborhoodPhotos />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default demo