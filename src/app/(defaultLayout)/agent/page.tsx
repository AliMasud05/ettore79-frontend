"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import AgentCard from "@/components/card/agent-card";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import agentImage from "@/assets/agent/Frame 1610068574.png";
import { useGetUserByRoleQuery } from "@/redux/api/authApi";

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

  // Fetch agents using the useGetUserByRoleQuery hook
  const {
    data: agentResponse,
    isLoading,
    isError,
  } = useGetUserByRoleQuery("AGENT");

  // Map API data to the format expected by AgentCard
  const agents =
    agentResponse?.data?.map((agent) => ({
      id: agent.id,
      name: agent.name,
      company: agent.company || "N/A", // Fallback if company is null
      rating: 4.7, // Placeholder as API doesn't provide rating
      reviewCount: 0, // Placeholder as API doesn't provide review count
      priceRangeMin: agent.minLoanAmount || "N/A", // Using minLoanAmount as a placeholder
      priceRangeMax: agent.maxLoanAmount || "N/A", // Using maxLoanAmount as a placeholder
      salesCount: 0, // Placeholder as API doesn't provide sales count
      imageUrl:
        agent.profileImage ||
        "/placeholder.svg?height=280&width=320&query=professional", // Fallback image
      category: agent.specialities
        ? agent.specialities.toLowerCase()
        : "residential", // Map specialities to category, default to residential
      experience: agent.experience || "N/A",
      fbLink: agent.fbLink || null,
      linkedInLink: agent.linkedInLink || null,
    })) || [];

  const filteredAgents = agents.filter((agent) => {
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
        <div className="flex flex-wrap border rounded-sm border-gray-300 overflow-hidden">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-3 border-r-1 text-base font-medium transition-colors
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
        <div
          className="
            col-span-1 md:col-span-2 lg:col-span-3
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Loading agents...</p>
            </div>
          ) : isError ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-500 text-lg">
                Error fetching agents. Please try again later.
              </p>
            </div>
          ) : filteredAgents.length > 0 ? (
            filteredAgents
              .slice(0, 6)
              .map((agent) => (
                <AgentCard
                  key={agent.id}
                  name={agent.name}
                  company={agent.company}
                  rating={agent.rating}
                  reviewCount={agent.reviewCount}
                  priceRangeMin={agent.priceRangeMin}
                  priceRangeMax={agent.priceRangeMax}
                  salesCount={agent.salesCount}
                  imageUrl={agent.imageUrl}
                  experience={agent.experience}
                  fbLink={agent.fbLink}
                  linkedInLink={agent.linkedInLink}
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
        <div className="col-span-1">{/* space for advertisements */}</div>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 rounded-xl bg-white">
        <div className="bg-[#FFE9DB] col-span-1 md:col-span-4 flex justify-center items-center flex-col gap-4">
          <h2 className="text-[#3012F0] secondary-font font-bold text-4xl md:text-5xl">
            What is True Agent?
          </h2>
          <Button className="bg-[#3012F0] py-5 hover:bg-orange-600 text-white">
            Know More
          </Button>
        </div>
        <div className="col-span-1 md:col-span-2 bg-blue-500">
          <Image
            src={agentImage.src}
            alt="Agent Image"
            width={1000}
            height={1000}
            className="object-cover object-center h-40"
            priority
          />
        </div>
      </div>
    </div>
  );
}
