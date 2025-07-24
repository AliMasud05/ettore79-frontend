"use client";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import agent1 from "@/assets/agent/Image (10).png";
import agent2 from "@/assets/agent/Image (11).png";
import agent3 from "@/assets/agent/Image (8).png";

import { Search } from "lucide-react";
import AgentCard from "@/components/card/agent-card";

// JSON data for agents
const agentData = {
  residential: [
    {
      name: "Olivia Rhye",
      company: "Americorp Real Estate",
      rating: 4.9,
      reviewCount: 127,
      priceRangeMin: "$13K",
      priceRangeMax: "$3.8M",
      salesCount: 526,
      imageUrl: agent1.src,
    },
    {
      name: "Michael Stone",
      company: "Urban Living Realty",
      rating: 4.7,
      reviewCount: 89,
      priceRangeMin: "$50K",
      priceRangeMax: "$2.5M",
      salesCount: 342,
      imageUrl: agent2.src,
    },
    {
      name: "Sarah Johnson",
      company: "Hometown Properties",
      rating: 4.8,
      reviewCount: 156,
      priceRangeMin: "$80K",
      priceRangeMax: "$1.2M",
      salesCount: 278,
      imageUrl: agent3.src,
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
    },
  ],
  commercial: [
    {
      name: "James Peterson",
      company: "Corporate Real Estate Solutions",
      rating: 4.7,
      reviewCount: 98,
      priceRangeMin: "$250K",
      priceRangeMax: "$15M",
      salesCount: 287,
      imageUrl: agent1.src,
    },
    {
      name: "Jennifer Lee",
      company: "Metropolitan Commercial",
      rating: 4.9,
      reviewCount: 156,
      priceRangeMin: "$500K",
      priceRangeMax: "$25M",
      salesCount: 412,
      imageUrl: agent2.src,
    },
    {
      name: "Thomas Wright",
      company: "Global Properties Inc.",
      rating: 4.8,
      reviewCount: 112,
      priceRangeMin: "$1M",
      priceRangeMax: "$50M",
      salesCount: 198,
      imageUrl: agent3.src,
    },
    {
      name: "Lisa Martinez",
      company: "Urban Commercial Group",
      rating: 4.6,
      reviewCount: 87,
      priceRangeMin: "$300K",
      priceRangeMax: "$18M",
      salesCount: 156,
      imageUrl: agent1.src,
    },
  ],
  luxury: [
    {
      name: "Alexander Dupont",
      company: "Luxury Estates Worldwide",
      rating: 4.9,
      reviewCount: 201,
      priceRangeMin: "$2M",
      priceRangeMax: "$75M",
      salesCount: 178,
      imageUrl: agent2.src,
    },
    {
      name: "Sophia Laurent",
      company: "Prestige Properties",
      rating: 4.9,
      reviewCount: 245,
      priceRangeMin: "$1.5M",
      priceRangeMax: "$100M",
      salesCount: 321,
      imageUrl: agent3.src,
    },
    {
      name: "Henry Vanderbilt",
      company: "Elite Realty Group",
      rating: 4.8,
      reviewCount: 176,
      priceRangeMin: "$3M",
      priceRangeMax: "$65M",
      salesCount: 254,
      imageUrl: agent1.src,
    },
  ],
  rental: [
    {
      name: "Emma Thompson",
      company: "Urban Rentals LLC",
      rating: 4.7,
      reviewCount: 143,
      priceRangeMin: "$800",
      priceRangeMax: "$15K",
      salesCount: 412,
      imageUrl: agent2.src,
    },
    {
      name: "Daniel Kim",
      company: "Metro Rental Specialists",
      rating: 4.6,
      reviewCount: 98,
      priceRangeMin: "$1K",
      priceRangeMax: "$12K",
      salesCount: 287,
      imageUrl: agent3.src,
    },
    {
      name: "Rachel Adams",
      company: "City Living Rentals",
      rating: 4.8,
      reviewCount: 167,
      priceRangeMin: "$1.2K",
      priceRangeMax: "$10K",
      salesCount: 389,
      imageUrl: agent1.src,
    },
    {
      name: "Kevin Brown",
      company: "Premier Rental Properties",
      rating: 4.7,
      reviewCount: 112,
      priceRangeMin: "$900",
      priceRangeMax: "$8K",
      salesCount: 256,
      imageUrl: agent2.src,
    },
  ],
};

export default function AgentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl secondary-font font-bold text-purple-700 mb-2">
        Find the Perfect Agent
      </h1>
      <p className="text-gray-600 mb-8 font-normal">
        Connect with top-rated real estate professionals in your area.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <Tabs defaultValue="residential" className="w-full">
          <div className="flex gap-6 items-center">
            <TabsList className="py-5 rounded-md flex bg-white">
              <TabsTrigger
                value="residential"
                className="rounded-md border-2 border-gray-300 
     text-base text-[#717680] font-medium
     data-[state=active]:bg-[#F4EEEB] data-[state=active]:text-blue-600 py-5"
              >
                Residential
              </TabsTrigger>
              <TabsTrigger
                value="commercial"
                className="rounded-md border-2 border-gray-300 bg-white
     text-base text-[#717680] font-medium
     data-[state=active]:bg-[#F4EEEB] data-[state=active]:text-blue-600 py-5"
              >
                Commercial
              </TabsTrigger>
              <TabsTrigger
                value="luxury"
                className="rounded-md border-2 border-gray-300 bg-white
     text-base text-[#717680] font-medium
     data-[state=active]:bg-[#F4EEEB] data-[state=active]:text-blue-600 py-5"
              >
                Luxury
              </TabsTrigger>
              <TabsTrigger
                value="rental"
                className="rounded-md border-2 border-gray-300 bg-white
     text-base text-[#717680] font-medium
     data-[state=active]:bg-[#F4EEEB] data-[state=active]:text-blue-600 py-5"
              >
                Rental
              </TabsTrigger>
            </TabsList>

            <div className="relative">
              <Search
                color="black"
                strokeWidth={2.25}
                className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5"
              />
              <Input
                placeholder="Search agents"
                className="pl-10 w-full max-w-md py-5 placeholder:text-base"
              />
            </div>
          </div>

          <TabsContent value="residential" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {agentData.residential.map((agent, index) => (
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
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {agentData.commercial.map((agent, index) => (
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
              ))}
            </div>
          </TabsContent>

          <TabsContent value="luxury" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {agentData.luxury.map((agent, index) => (
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
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rental" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {agentData.rental.map((agent, index) => (
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
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
