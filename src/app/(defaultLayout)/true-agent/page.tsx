 import Image from 'next/image';
import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import img1 from "@/assets/true-agent/img1.jpg";
import img2 from "@/assets/true-agent/img2.png";

 
 const page = () => {
   

   return (
     <div className='container mx-auto px-4 mb-20 flex flex-col gap-6'>
       <section className="py-20 ">
         <div className="max-w-6xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
               <Image
                 src={img1.src}
                 alt="Modern bathroom interior"
                 width={1000}
                 height={1000}
                 className="rounded-lg object-cover w-full h-[500px]"
               />
             </div>
             <div className="order-1 lg:order-2">
               <h2 className="text-4xl font-bold  text-black secondary-font mb-8">
                 What will you find on OIKY?
               </h2>
               <div className="space-y-6">
                 {[
                   {
                     title: "Property Listings",
                     desc: "Explore our vast database of properties, immersive virtual tours, and the best search experience.",
                   },
                   {
                     title: "Neighborhood and School Guides",
                     desc: "Discover what it's like to live in each area before you move. Know the safety, connectivity, lifestyle, nearby services, and much more.",
                   },
                   {
                     title: "TRUE AGENT",
                     desc: "A transparent and reliable directory of real estate agents, brokers, and other professionals in the sector with verified profiles, track records, coverage areas, and customer reviews.",
                   },
                   {
                     title: "Content and Learning Center",
                     desc: "Practical guides, news, videos, and courses designed for each type of user: buyers, property owners, agents, brokers, and investors.",
                   },
                   {
                     title: "Professional Tools",
                     desc: "Property listing, advertising solutions, lead generation, and digital communication: chats, brokers, and agencies.",
                   },
                   {
                     title: "Real Connection with Clients",
                     desc: "We build bridges of trust between those looking for a new home and those making it possible.",
                   },
                 ].map((item, index) => (
                   <div key={index}>
                     <h3></h3>
                     <p className="text-[#666] text-lg">
                       <span className="font-semibold text-lg text-gray-900 mb-2">
                         {item.title}:
                       </span>{" "}
                       <span className="text-[#666] text-base font-normal">
                         {item.desc}
                       </span>
                     </p>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>
       <section className=" bg-white">
         <div className="max-w-6xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-4xl font-bold text-black secondary-font mb-6">
                 Why is OIKY different?
               </h2>
               <div className="flex flex-col text-justify gap-2">
                 <p className="text-[#666] text-base font-normal">
                   Because we are not just a portal.
                 </p>
                 <p className="text-[#666] text-base font-normal">
                   We are a living community that combines technology, trust,
                   and valuable content to transform the real estate industry in
                   Mexico.
                 </p>
                 <p className="text-[#666] text-base font-normal">
                   Our TRUE AGENT directory and our tools help you achieve real
                   results.
                 </p>
               </div>
             </div>
             <div>
               <Image
                 src={img2.src}
                 alt="Modern house exterior"
                 width={500}
                 height={400}
                 className="rounded-lg object-cover w-full h-[400px]"
               />
             </div>
           </div>
         </div>
       </section>
       {/* Our Mission Section */}
       <section className="space-y-6">
         <h2 className="text-3xl font-bold text-gray-900">Our mission</h2>

         <div className="space-y-4 text-gray-700 leading-relaxed">
           <p>
             To grow, organize, and give visibility to true professionals in the
             sector.
           </p>

           <p>
             TRUE AGENTM seeks to professionalize the market, provide certainty
             to users, and build real estate relationships based on transparency
             and results.
           </p>

           <div className="space-y-3">
             <h3 className="font-semibold text-gray-900">
               What types of professionals support?
             </h3>
             <p>
               Here you can find real estate agents, mortgage advisors,
               notaries, photographers, appraisers, marketing specialists, and
               more.
             </p>
           </div>

           <div className="space-y-3">
             <h3 className="font-semibold text-gray-900">
               How can we help you find a Verified Professional?
             </h3>
             <p>
               Every Professional who joins TRUE AGENTM is verified. They are
               asked to demonstrate both their experience and credentials with
               evidence.
             </p>
             <p>We try to Useful for Those Seeking Professional Services.</p>
           </div>

           <div className="space-y-3">
             <h3 className="font-semibold text-gray-900">
               TRUE AGENTM is useful for those seeking professional services for
               several reasons:
             </h3>

             <div className="space-y-3 ml-4">
               <div>
                 <span className="font-medium">
                   1. Diversity of Services
                 </span>{" "}
                 TRUE AGENTM offers a wide range of professional services,
                 making it easy for users to find what they need without having
                 to search multiple platforms.
               </div>

               <div>
                 <span className="font-medium">2. Ease of Use:</span> With a
                 clear and user-friendly interface, users can easily navigate
                 through the available options and select the services they wish
                 to purchase.
               </div>

               <div>
                 <span className="font-medium">3. Direct Connection</span>{" "}
                 The platform connects directly with qualified professionals,
                 ensuring they receive high-quality services from experienced
                 individuals.
               </div>

               <div>
                 <span className="font-medium">
                   4. Verified Professionals :
                 </span>{" "}
                 All professionals on TRUE AGENTM are verified, giving users
                 confidence that they are working with legitimate and qualified
                 service providers.
               </div>

               <div>
                 <span className="font-medium">
                   5. Efficiency and Time Savings:
                 </span>{" "}
                 By centralizing multiple services on a single platform, users
                 can save time and effort by quickly finding what they need.
               </div>

               <div>
                 <span className="font-medium">6. Personalization:</span> TRUE
                 AGENT can offer personalized recommendations based on user
                 needs and preferences, improving the overall user experience.
               </div>

               <div>
                 <span className="font-medium">7. Security and Trust:</span>{" "}
                 The platform ensures that all professionals meet certain
                 standards before being included, creating a trustworthy
                 environment for users.
               </div>
             </div>

             <p className="mt-4">
               In short, TRUE AGENTM is an efficient tool for those seeking
               professional services because it combines convenience, trust, and
               a wide range of services in one place.
             </p>
           </div>
         </div>
       </section>

       {/* FAQ Section */}
       <section className="space-y-6">
         <h2 className="text-3xl font-bold text-gray-900 text-center">
           Frequently Asked Questions (FAQs)
         </h2>

         <Accordion type="single" collapsible className="w-full space-y-4">
           <AccordionItem
             value="item-1"
             className="border border-gray-200 rounded-lg px-6"
           >
             <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
               How do I join as a True Agent?
             </AccordionTrigger>
             <AccordionContent className="text-gray-700 leading-relaxed pt-2">
               A licensed agent is a real estate agent, where you have public
               contact a pass, tax, operations, who, etc. I will then subscribe
               to the paid plan you prefer. This will position you as a relevant
               agent in the area and market you work professionally and
               ethically.
             </AccordionContent>
           </AccordionItem>

           <AccordionItem
             value="item-2"
             className="border border-gray-200 rounded-lg px-6"
           >
             <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
               What does it cost?
             </AccordionTrigger>
             <AccordionContent className="text-gray-700 leading-relaxed pt-2">
               Our records and profiles cost between $50 (business card
               information) and $200 (professional agent in only their
               experience and track record). Licenses, affiliations, reviews,
               background, among others. But the most important thing is that we
               do not charge commissions on the work you do with your clients.
               Financial effort for the expense.
             </AccordionContent>
           </AccordionItem>

           <AccordionItem
             value="item-3"
             className="border border-gray-200 rounded-lg px-6"
           >
             <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
               Can I contact more than one agent at a time?
             </AccordionTrigger>
             <AccordionContent className="text-gray-700 leading-relaxed pt-2">
               You can contact several agents and work with them. True Agents.
               You will meet several agents whenever you want. Even if it is a
               business environment, and you can choose your current agent and
               choose.
             </AccordionContent>
           </AccordionItem>

           <AccordionItem
             value="item-4"
             className="border border-gray-200 rounded-lg px-6"
           >
             <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
               Is there a cost to use the directory?
             </AccordionTrigger>
             <AccordionContent className="text-gray-700 leading-relaxed pt-2">
               No charge to create. Find a True Agent to you, on the contrary,
               we encourage you to find it free of investment, and choose the
               one that best fits your professional criteria and for. For
               Professionals, there is a cost to be listed in the directory and
               become a TRUE AGENT, as we help you build out and generate
               qualified leads.
             </AccordionContent>
           </AccordionItem>
         </Accordion>
       </section>
     </div>
   );
 }
 
 export default page