import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Home,
  MapPin,
  TrendingUp,
  Users
} from "lucide-react";
import Image from "next/image";
import bannerImage from "@/assets/banner/mortgages.png";

const Banner = () => {
  return (
    <div>
      {/* Hero Section */}
      <main className="relative">
        <div className="absolute inset-0">
          <Image
            src={bannerImage.src}
            alt="Modern interior background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/20" />
        </div>

        <div className="relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="md:text-5xl secondary-font text-4xl font-bold text-gray-900 mb-6">
              The New Era of Real Estate has Arrived in Mexico
            </h1>
            <p className="text-xl text-center text-black/80
            mb-12 font-normal 
            max-w-3xl mx-auto">
              We connect buyers, sellers, tenants and professionals in one
              comprehensive digital platform
            </p>

            {/* Search Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              {/* Tabs */}
              <div className="flex space-x-1 mb-6">
                <button className="px-6 py-2 bg-orange-500 text-white rounded-md font-medium">
                  Rent
                </button>
                <button className="px-6 py-2 text-gray-600 hover:text-gray-900">
                  Buy
                </button>
              </div>

              {/* Search Fields */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <Input
                    placeholder="Location / Destination"
                    className="h-12 border-gray-300"
                  />
                </div>
                <div className="md:col-span-1">
                  <Select>
                    <SelectTrigger className="h-12 border-gray-300 px-4 py-6">
                
                      <SelectValue placeholder="$500-$5000" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500-1000">$500-$1000</SelectItem>
                      <SelectItem value="1000-2500">$1000-$2500</SelectItem>
                      <SelectItem value="2500-5000">$2500-$5000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-1">
                  <Select>
                    <SelectTrigger className="h-12 border-gray-300 px-4 py-6">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-1">
                  <Button className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Feature Cards */}
      <div className="relative z-10 px-6 pb-20 my-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Submit Properties */}
            <div className="bg-orange-500 text-white p-6 rounded-lg">
              <div className="mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Properties</h3>
              <p className="text-orange-100 mb-4 text-sm">
                Post your ideal home with our advanced tools and reach thousands
                of potential buyers
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-orange-500 hover:bg-gray-100"
              >
                Submit
              </Button>
            </div>

            {/* Sell Property */}
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <div className="mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sell Property</h3>
              <p className="text-blue-100 mb-4 text-sm">
                List your property and connect with buyers looking for their
                dream home
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                List Property
              </Button>
            </div>

            {/* Find Agent */}
            <div className="bg-amber-700 text-white p-6 rounded-lg">
              <div className="mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Agent</h3>
              <p className="text-amber-100 mb-4 text-sm">
                Connect with verified agents in your area who understand your
                needs
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-amber-700 hover:bg-gray-100"
              >
                Search Agent
              </Button>
            </div>

            {/* See Neighborhoods */}
            <div className="bg-indigo-800 text-white p-6 rounded-lg">
              <div className="mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">See Neighborhoods</h3>
              <p className="text-indigo-200 mb-4 text-sm">
                Explore neighborhoods and discover the perfect area for your
                lifestyle
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-indigo-800 hover:bg-gray-100"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
