 import agent1 from "@/assets/agent/Image (10).png"
import agent2 from "@/assets/agent/Image (11).png"
import agent3 from "@/assets/agent/Image (8).png"
import img1 from '@/assets/school/img1.png'
import img2 from '@/assets/school/img2.png'
import img3 from '@/assets/school/img3.png'
import img4 from '@/assets/school/img4.png'
import img5 from '@/assets/school/img5.png'
import AgentCard from '@/components/card/agent-card'
import ExploreArea from "@/components/map/leaflet-map"
import PropertyCard from '@/components/property/PropertyCard'
import { MapPinOff } from 'lucide-react'
import Image from 'next/image'

 
 const page = () => {
    const schoolImage = [ img2, img3, img4, img5]
    const agentData = [     
      {
        name: "Sarah Johnson",
        company: "Hometown Properties",
        rating: 4.8,
        reviewCount: 156,
        priceRangeMin: "$80K",
        priceRangeMax: "$1.2M",
        salesCount: 278,
        imageUrl: agent3.src,
        category: "residential",
      },
      {
        name: "David Chen",
        company: "Metro Real Estate Group",
        rating: 4.9,
        reviewCount: 203,
        priceRangeMin: "$100K",
        priceRangeMax: "$4.2M",
        salesCount: 612,
        imageUrl: agent1.src,
        category: "residential",
      },
      {
        name: "Emily Wilson",
        company: "Coastal Living Realty",
        rating: 4.6,
        reviewCount: 72,
        priceRangeMin: "$75K",
        priceRangeMax: "$2.8M",
        salesCount: 189,
        imageUrl: agent2.src,
        category: "residential",
      },
      {
        name: "Robert Garcia",
        company: "Summit Properties",
        rating: 4.8,
        reviewCount: 134,
        priceRangeMin: "$60K",
        priceRangeMax: "$3.1M",
        salesCount: 421,
        imageUrl: agent3.src,
        category: "residential",
      }
    
    ];
   return (
     <div className="flex flex-col items-center justify-center min-h-[80vh] container mt-6">
       <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
         <div>
           <Image
             src={img1}
             alt="school"
             width={1000}
             height={1000}
             className="object-cover"
           />
         </div>
         <div className="grid grid-cols-2 gap-4 w-full">
           {schoolImage.map((image, index) => {
             return (
               <Image
                 key={index}
                 src={image}
                 alt="school"
                 width={1000}
                 height={1000}
                 className="object-cover"
               />
             );
           })}
         </div>
       </section>
       <section>
         <h1 className=" text-[#3012F0] text-3xl md:text-[44px] font-semibold leading-10 md:leading-16 my-6">
           Maranatha Christian School
         </h1>
         <p className="text-[#7B7B7B] font-normal leading-6 my-2">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
           adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
           sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet,
           consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem
           ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt{" "}
         </p>
         <div className="flex gap-2 text-[#7B7B7B] text-base my-4">
           <MapPinOff />
           <p>4517 Washington Ave. Kentucky 39495</p>
         </div>

         <div className="flex gap-6 my-6">
           <div>
             <h3 className="text-base font-normal leading-6 mb-1">Students</h3>
             <p className="text-[#7B7B7B] text-base leading-6 ">120</p>
           </div>
           <div>
             <h3 className="text-base font-normal leading-6 mb-1">
               Grade Level
             </h3>
             <p className="text-[#7B7B7B] text-base leading-6 ">Middle</p>
           </div>
           <div>
             <h3 className="text-base font-normal leading-6 mb-1">
               School Type
             </h3>
             <p className="text-[#7B7B7B] text-base leading-6 ">Public</p>
           </div>
         </div>
       </section>
       <section className=" w-full">
         <h2 className="text-2xl md:text-3xl font-semibold leading-6 md:leading-12 text-[#040B0C] my-4">
           Location Information
         </h2>
         <div>
           {/* <Image
             src={map}
             alt="map"
             width={1000}
             height={1000}
             className="object-cover w-full rounded-2xl"
             priority
             loading="eager"
           /> */}
            <ExploreArea />
         </div>
       </section>
       <section>
         <h2 className="text-2xl md:text-3xl font-semibold leading-8 md:leading-12 text-[#040B0C] my-4">
           Agents And Landlords Specializing in Attendance Zone
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {agentData.map((agent, index) => {
             return (
               <AgentCard
                 key={index}
                 name={agent.name}
                 company={agent.company}
                 rating={agent.rating}
                 reviewCount={agent.reviewCount}
                 priceRangeMin={agent.priceRangeMin}
                 priceRangeMax={agent.priceRangeMax}
                 salesCount={agent.salesCount}
                 imageUrl={agent.imageUrl}
               />
             );
           })}
         </div>
       </section>
       <section className="w-full">
         <h2 className="text-3xl font-semibold leading-12 text-[#040B0C] my-4">
           Homes for Sale And Rent
         </h2>
         <div className="flex gap-6 my-6 flex-wrap">
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
         </div>
       </section>
     </div>
   );
 }
 
 export default page