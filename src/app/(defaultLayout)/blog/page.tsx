"use client";
import BlogCard from "@/components/card/BlogCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import blog1 from "@/assets/blog/blog1.png";
import blog2 from "@/assets/blog/blog2.png";
import blog3 from "@/assets/blog/blog3.png";
import { Search } from "lucide-react";

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
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl secondary-font font-bold text-purple-700 mb-2">
        Resources and insights
      </h1>
      <p className="text-gray-600 mb-8 font-normal">
        The latest industry news, interviews, technologies, and resources.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <Tabs defaultValue="agents" className="w-full  ">
          <div className="flex gap-6 items-center">
            <TabsList className="py-5 rounded-md flex bg-white">
              <TabsTrigger
                value="agents"
                className="rounded-md border-2 border-gray-300 
     text-base text-[#717680] font-medium
     data-[state=active]:bg-[#F4EEEB] data-[state=active]:text-blue-600 py-5"
              >
                Agents
              </TabsTrigger>
              <TabsTrigger
                value="landlords"
                className="rounded-md border-2 border-gray-300 bg-white
     text-base text-[#717680] font-medium
     data-[state=active]:bg-[#F4EEEB] data-[state=active]:text-blue-600 py-5"
              >
                Landlords
              </TabsTrigger>
              <TabsTrigger
                value="professional"
                className="rounded-md border-2 border-gray-300 bg-white
     text-base text-[#717680] font-medium
     data-[state=active]:bg-[#F4EEEB] data-[state=active]:text-blue-600 py-5"
              >
                Professional
              </TabsTrigger>
              <TabsTrigger
                value="buyer"
                className="rounded-md border-2 border-gray-300 bg-white
     text-base text-[#717680] font-medium
     data-[state=active]:bg-[#F4EEEB] data-[state=active]:text-blue-600 py-5"
              >
                Buyer
              </TabsTrigger>
            </TabsList>

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

          <TabsContent value="agents" className="mt-6">
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
          </TabsContent>

          <TabsContent value="landlords" className="mt-6">
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
          </TabsContent>

          <TabsContent value="professional" className="mt-6">
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
          </TabsContent>

          <TabsContent value="buyer" className="mt-6">
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
