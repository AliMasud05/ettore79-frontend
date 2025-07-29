"use client";

import { useState } from "react";

import profile from "@/assets/agent/Image (8).png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import MortgageBrokerCard from "../card/mortgage-broker";
import { Search } from "lucide-react";


interface BrokerFilters {
  loanType: string;
  loanTerm: string;
  purchasePrice: string;
  downPayment: string;
  downPaymentPercent: string;
  location: string;
}

export default function Brokers() {
  const [filters, setFilters] = useState<BrokerFilters>({
    loanType: "Purchase",
    loanTerm: "30 Year Fixed",
    purchasePrice: "1245.56",
    downPayment: "4699",
    downPaymentPercent: "40%",
    location: "Los Angeles CA",
  });

  const brokers = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: "Carlos Mendoza",
    company: "MortgagePro Mexico",
    rating: 4.9,
    reviews: 156,
    experience: 12,
    location: "Ciudad de Mexico",
    specialties: ["First-time buyers", "Investment properties"],
    avatar: `/placeholder.svg?height=200&width=200&text=Broker${i + 1}`,
    verified: true,
  }));

  const handleFilterChange = (key: keyof BrokerFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    console.log("Searching with filters:", filters);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold secondary-font text-blue-600 mb-4">
              Mortgage Brokers Directory
            </h1>
            <p className="text-gray-600 text-base max-w-3xl">
              Connect with certified mortgage professionals who can help you
              secure the best financing for your property purchase.
            </p>
          </div>

          {/* Search Filters */}
          <div className="w-full ">
            <div className="bg-white  rounded-lg py-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                {/* Loan Type */}
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Loan Type
                  </label>
                  <div className="flex border border-gray-300 rounded  w-[200px]">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFilterChange("loanType", "Purchase")}
                      className={`flex-1 rounded-none h-12 ${
                        filters.loanType === "Purchase"
                          ? "bg-gray-900 text-white hover:bg-gray-800"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Purchase
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleFilterChange("loanType", "Refinance")
                      }
                      className={`flex-1 rounded-none h-12  border-gray-300 ${
                        filters.loanType === "Refinance"
                          ? "bg-gray-900 text-white hover:bg-gray-800"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Refinance
                    </Button>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Loan Term
                  </label>
                  <Select
                    value={filters.loanTerm}
                  
                    onValueChange={(value) =>
                      handleFilterChange("loanTerm", value)
                    }
                  >
                    <SelectTrigger className="bg-white border-gray-300 py-6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15 Year Fixed">
                        15 Year Fixed
                      </SelectItem>
                      <SelectItem value="30 Year Fixed">
                        30 Year Fixed
                      </SelectItem>
                      <SelectItem value="5/1 ARM">5/1 ARM</SelectItem>
                      <SelectItem value="7/1 ARM">7/1 ARM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Purchase Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Purchase Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <Input
                      value={filters.purchasePrice}
                      onChange={(e) =>
                        handleFilterChange("purchasePrice", e.target.value)
                      }
                      className="bg-white border-gray-300 pl-7 py-6"
                    />
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Down Payment
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        value={filters.downPayment}
                        onChange={(e) =>
                          handleFilterChange("downPayment", e.target.value)
                        }
                        className="bg-white border-gray-300 pl-7 py-6"
                      />
                    </div>
                    <Input
                      value={filters.downPaymentPercent}
                      onChange={(e) =>
                        handleFilterChange("downPaymentPercent", e.target.value)
                      }
                      className="bg-white border-gray-300 w-16 py-6"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Location
                  </label>
                  <Input
                    value={filters.location}
                    onChange={(e) =>
                      handleFilterChange("location", e.target.value)
                    }
                    className="bg-white border-gray-300 py-6"
                  />
                </div>

                {/* Search Button */}
                <div>
                  <Button
                    onClick={handleSearch}
                    className="w-full text-base bg-orange-500 py-6 hover:bg-orange-600 text-white"
                  >
                    <Search className="w-4 h-4 mr-2 " />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Brokers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {brokers.map((broker) => (
              <Link href={`/mortgages-broker/${broker.id}`} key={broker.id}>
                <MortgageBrokerCard
                  name="Carlos Mendoza"
                  company="MortgagePro Mexico"
                  rating={4.9}
                  reviewCount={156}
                  priceRangeMin="$13K"
                  priceRangeMax="$3.8M"
                  salesCount={526}
                  imageUrl={profile.src}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
