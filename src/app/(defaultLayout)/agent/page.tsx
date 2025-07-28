"use client";
import { Input } from "@/components/ui/input";
import agent1 from "@/assets/agent/Image (10).png";
import agent2 from "@/assets/agent/Image (11).png";
import agent3 from "@/assets/agent/Image (8).png";
import { Search } from "lucide-react";
import AgentCard from "@/components/card/agent-card";
import { useState } from "react";

// JSON data for agents with category field
const agentData = [
  // Residential agents
  {
    name: "Olivia Rhye",
    company: "Americorp Real Estate",
    rating: 4.9,
    reviewCount: 127,
    priceRangeMin: "$13K",
    priceRangeMax: "$3.8M",
    salesCount: 526,
    imageUrl: agent1.src,
    category: "residential",
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
    category: "residential",
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
  },
  // Commercial agents
  {
    name: "James Peterson",
    company: "Corporate Real Estate Solutions",
    rating: 4.7,
    reviewCount: 98,
    priceRangeMin: "$250K",
    priceRangeMax: "$15M",
    salesCount: 287,
    imageUrl: agent1.src,
    category: "commercial",
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
    category: "commercial",
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
    category: "commercial",
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
    category: "commercial",
  },
  // Luxury agents
  {
    name: "Alexander Dupont",
    company: "Luxury Estates Worldwide",
    rating: 4.9,
    reviewCount: 201,
    priceRangeMin: "$2M",
    priceRangeMax: "$75M",
    salesCount: 178,
    imageUrl: agent2.src,
    category: "luxury",
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
    category: "luxury",
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
    category: "luxury",
  },
  // Rental agents
  {
    name: "Emma Thompson",
    company: "Urban Rentals LLC",
    rating: 4.7,
    reviewCount: 143,
    priceRangeMin: "$800",
    priceRangeMax: "$15K",
    salesCount: 412,
    imageUrl: agent2.src,
    category: "rental",
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
    category: "rental",
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
    category: "rental",
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
    category: "rental",
  },
];

const categories = [
  { id: "all", label: "All Agents" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "luxury", label: "Luxury" },
  { id: "rental", label: "Rental" },
];

export default function AgentsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = agentData.filter((agent) => {
    const matchesCategory =
      activeCategory === "all" || agent.category === activeCategory;
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl secondary-font font-bold text-purple-700 mb-2">
        Find the Perfect Agent
      </h1>
      <p className="text-gray-600 mb-8 font-normal">
        Connect with top-rated real estate professionals in your area.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Custom Tabs */}
        <div className="flex flex-wrap border rounded-sm border-gray-300 overflow-hidden ">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-3 border-r-1  text-base font-medium transition-colors
                ${
                  activeCategory === category.id
                    ? "bg-[#F4EEEB] text-blue-600 border-blue-300"
                    : "bg-white text-[#717680] hover:bg-gray-50"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative flex-grow items-center max-w-md">
          <Search
            color="black"
            strokeWidth={2.25}
            className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5"
          />
          <Input
            placeholder="Search agents"
            className="pl-10 w-full py-6 placeholder:text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Agent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        <div className="
        col-span-1 md:col-span-2 lg:col-span-3 

        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {filteredAgents.length > 0 ? (
            filteredAgents.map((agent, index) => (
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
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No agents found matching your criteria.
              </p>
            </div>
          )}
        </div>
        <div className="col-span-1">
{/* space for advertisements */}
        </div>
      </div>
    </div>
  );
}
