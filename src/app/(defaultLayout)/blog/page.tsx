"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BlogCard from "@/components/card/BlogCard";
import { toast } from "sonner"; 
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";

// Tab type for allowed tab names
type TabType = "buy" | "sell" | "rent" | "agents" | "news and insights";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<TabType>("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError } = useGetAllBlogsQuery({});

  console.log(data);

  // Map API blogs to tabs
  const blogs = data?.data?.data || [];

  // Filter blogs by active tab and search query
  const filteredBlogs = blogs.filter((blog: any) => {
    const matchesTab =
      activeTab === "news and insights"
        ? blog.category === "news" || blog.category === "insights"
        : blog.category === activeTab;
    const matchesSearch =
      !searchQuery ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Handle error state
  if (isError) {
    toast.error("Failed to load blogs. Please try again later.");
  }

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
          <div className="flex gap-6 items-center flex-wrap">
            <div className="flex bg-white rounded-md border border-gray-300">
              <button
                onClick={() => setActiveTab("buy")}
                className={`px-4 py-2 text-base font-medium transition-colors border-r-2 border-gray-300 ${
                  activeTab === "buy"
                    ? "bg-[#F4EEEB] text-blue-600"
                    : "text-[#717680]"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveTab("sell")}
                className={`px-4 py-2 text-base font-medium transition-colors border-r-2 border-gray-300 ${
                  activeTab === "sell"
                    ? "bg-[#F4EEEB] text-blue-600"
                    : "text-[#717680]"
                }`}
              >
                Sell
              </button>
              <button
                onClick={() => setActiveTab("rent")}
                className={`px-4 py-2 text-base font-medium transition-colors border-r-2 border-gray-300 ${
                  activeTab === "rent"
                    ? "bg-[#F4EEEB] text-blue-600"
                    : "text-[#717680]"
                }`}
              >
                Rent
              </button>
              <button
                onClick={() => setActiveTab("agents")}
                className={`px-4 py-2 text-base font-medium transition-colors border-r-2 border-gray-300 ${
                  activeTab === "agents"
                    ? "bg-[#F4EEEB] text-blue-600"
                    : "text-[#717680]"
                }`}
              >
                Agents
              </button>
              <button
                onClick={() => setActiveTab("news and insights")}
                className={`px-4 py-2 text-base font-medium transition-colors ${
                  activeTab === "news and insights"
                    ? "bg-[#F4EEEB] text-blue-600"
                    : "text-[#717680]"
                }`}
              >
                News and Insights
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            {isLoading ? (
              <p className="text-center text-gray-600">Loading blogs...</p>
            ) : isError ? (
              <p className="text-center text-red-500">
                Error loading blogs. Please try again later.
              </p>
            ) : filteredBlogs.length === 0 ? (
              <p className="text-center text-gray-600">
                No blogs found for this category.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredBlogs.map((post: any) => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.description}
                    imageUrl={post.image}
                    author={post.user.name}
                    date={new Date(post.createdAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
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
