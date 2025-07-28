"use client";
import blog1 from "@/assets/blog/blog1.png";
import blog2 from "@/assets/blog/blog2.png";
import blog3 from "@/assets/blog/blog3.png";
import BlogCard from "@/components/card/BlogCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

// Tab type for allowed tab names
type TabType = "agents" | "landlords" | "professional" | "buyer";

// JSON data for blog posts
const blogData = {
  agents: [
    {
      title: "Professional Photography",
      description:
        "Discover how high-quality images and virtual tours can make a big difference in your property's appeal and rental success.",
      imageUrl: blog1.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Guide to Listing Your Property for Rent",
      description:
        "A step-by-step guide to getting your property noticed, attracting quality tenants, and securing long-term rentals with ease.",
      imageUrl: blog2.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Navigating Property Leasing",
      description:
        "Essential tips to help first-time landlords understand the rental process and avoid common pitfalls.",
      imageUrl: blog3.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Professional Photography",
      description:
        "Discover how high-quality images and virtual tours can make a big difference in your property's appeal and rental success.",
      imageUrl: blog3.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Guide to Listing Your Property for Rent",
      description:
        "A step-by-step guide to getting your property noticed, attracting quality tenants, and securing long-term rentals with ease.",
      imageUrl: blog1.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Navigating Property Leasing",
      description:
        "Essential tips to help first-time landlords understand the rental process and avoid common pitfalls.",
      imageUrl: blog2.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Professional Photography",
      description:
        "Discover how high-quality images and virtual tours can make a big difference in your property's appeal and rental success.",
      imageUrl: blog1.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Guide to Listing Your Property for Rent",
      description:
        "A step-by-step guide to getting your property noticed, attracting quality tenants, and securing long-term rentals with ease.",
      imageUrl: blog3.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Navigating Property Leasing",
      description:
        "Essential tips to help first-time landlords understand the rental process and avoid common pitfalls.",
      imageUrl: blog2.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
  ],
  landlords: [
    {
      title: "Landlord's Guide to Property Management",
      description:
        "Learn the essential strategies for effective property management, tenant screening, and maximizing your rental income.",
      imageUrl: blog1.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Tenant Screening Best Practices",
      description:
        "How to find reliable tenants through thorough screening processes and background checks.",
      imageUrl:blog2.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Rental Property Maintenance Checklist",
      description:
        "A comprehensive guide to maintaining your rental property and keeping tenants happy.",
      imageUrl:blog3.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Landlord's Guide to Property Management",
      description:
        "Learn the essential strategies for effective property management, tenant screening, and maximizing your rental income.",
      imageUrl: blog1.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Tenant Screening Best Practices",
      description:
        "How to find reliable tenants through thorough screening processes and background checks.",
      imageUrl:blog2.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Rental Property Maintenance Checklist",
      description:
        "A comprehensive guide to maintaining your rental property and keeping tenants happy.",
      imageUrl:blog3.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
  ],
  professional: [
    {
      title: "Real Estate Market Trends 2023",
      description:
        "Stay ahead of the curve with our comprehensive analysis of the latest trends shaping the real estate market.",
      imageUrl:blog1.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Legal Updates for Real Estate Professionals",
      description:
        "Important legal changes that every real estate professional should be aware of this year.",
      imageUrl:blog2.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Building Your Real Estate Network",
      description:
        "Strategies for expanding your professional network and growing your real estate business.",
      imageUrl:blog3.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
  ],
  buyer: [
    {
      title: "First-Time Homebuyer's Guide",
      description:
        "Everything you need to know about purchasing your first home, from financing options to closing the deal.",
      imageUrl:blog1.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Understanding Mortgage Options",
      description:
        "A breakdown of different mortgage types and how to choose the right one for your situation.",
      imageUrl:blog2.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
    {
      title: "Home Inspection Checklist",
      description:
        "What to look for during a home inspection to ensure you're making a sound investment.",
      imageUrl:blog3.src,
      author: "Olivia Rhye",
      date: "20 Jan 2023",
    },
  ],
};

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<TabType>("agents");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl secondary-font font-bold text-[#3012F0] mb-2">
        Resources and insights
      </h1>
      <p className="text-[#4B5563] mb-8 text-base font-normal">
        The latest industry news, interviews, technologies, and resources.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="w-full">
          <div className="flex gap-6 items-center">
            <div className="flex bg-white rounded-md  border border-gray-300">
              <button
                onClick={() => setActiveTab("agents")}
                className={`px-4  text-base 
                  font-medium transition-colors border-r-2 border-gray-300 ${
                    activeTab === "agents"
                      ? "bg-[#F4EEEB] text-blue-600"
                      : "text-[#717680]"
                  }`}
              >
                Agents
              </button>
              <button
                onClick={() => setActiveTab("landlords")}
                className={`px-4 py-2  text-base font-medium transition-colors border-r-2 border-gray-300 ${
                  activeTab === "landlords"
                    ? "bg-[#F4EEEB] text-blue-600"
                    : "text-[#717680]"
                }`}
              >
                Landlords
              </button>
              <button
                onClick={() => setActiveTab("professional")}
                className={`px-4 py-2  text-base font-medium transition-colors border-r-2 border-gray-300 ${
                  activeTab === "professional"
                    ? "bg-[#F4EEEB] text-blue-600"
                    : "text-[#717680]"
                }`}
              >
                Professional
              </button>
              <button
                onClick={() => setActiveTab("buyer")}
                className={`px-4 py-2 text-base font-medium transition-colors ${
                  activeTab === "buyer"
                    ? "bg-[#F4EEEB] text-blue-600"
                    : "text-[#717680]"
                }`}
              >
                Buyer
              </button>
            </div>
            <div className="relative">
              <Search
                color="black"
                strokeWidth={2.25}
                className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5"
              />
              <Input
                placeholder="Search"
                className="pl-10 w-full max-w-md py-5 placeholder:text-base"
              />
            </div>
          </div>

          <div className="mt-6">
            {activeTab === "agents" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogData.agents.map((post, index) => (
                  <BlogCard
                    key={index}
                    title={post.title}
                    description={post.description}
                    imageUrl={post.imageUrl}
                    author={post.author}
                    date={post.date}
                  />
                ))}
              </div>
            )}

            {activeTab === "landlords" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogData.landlords.map((post, index) => (
                  <BlogCard
                    key={index}
                    title={post.title}
                    description={post.description}
                    imageUrl={post.imageUrl}
                    author={post.author}
                    date={post.date}
                  />
                ))}
              </div>
            )}

            {activeTab === "professional" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogData.professional.map((post, index) => (
                  <BlogCard
                    key={index}
                    title={post.title}
                    description={post.description}
                    imageUrl={post.imageUrl}
                    author={post.author}
                    date={post.date}
                  />
                ))}
              </div>
            )}

            {activeTab === "buyer" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogData.buyer.map((post, index) => (
                  <BlogCard
                    key={index}
                    title={post.title}
                    description={post.description}
                    imageUrl={post.imageUrl}
                    author={post.author}
                    date={post.date}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}