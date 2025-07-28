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


interface BrokerFilters {
  loanType: string;
  loanTerm: string;
  purchasePrice: string;
  downPayment: string;
  location: string;
}

export function BrokersDirectoryPage() {
  const [filters, setFilters] = useState<BrokerFilters>({
    loanType: "Purchase",
    loanTerm: "30 Year Fixed",
    purchasePrice: "1245.56",
    downPayment: "4699",
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
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Type
                </label>
                <div className="flex gap-2">
                  <Button
                    variant={
                      filters.loanType === "Purchase" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleFilterChange("loanType", "Purchase")}
                    className={
                      filters.loanType === "Purchase"
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-700 border-gray-300"
                    }
                  >
                    Purchase
                  </Button>
                  <Button
                    variant={
                      filters.loanType === "Refinance" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleFilterChange("loanType", "Refinance")}
                    className={
                      filters.loanType === "Refinance"
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-700 border-gray-300"
                    }
                  >
                    Refinance
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term
                </label>
                <Select
                  value={filters.loanTerm}
                  onValueChange={(value) =>
                    handleFilterChange("loanTerm", value)
                  }
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15 Year Fixed">15 Year Fixed</SelectItem>
                    <SelectItem value="30 Year Fixed">30 Year Fixed</SelectItem>
                    <SelectItem value="5/1 ARM">5/1 ARM</SelectItem>
                    <SelectItem value="7/1 ARM">7/1 ARM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purchase Price
                </label>
                <Input
                  value={filters.purchasePrice}
                  onChange={(e) =>
                    handleFilterChange("purchasePrice", e.target.value)
                  }
                  placeholder="$ 1245.56"
                  className="bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment
                </label>
                <Input
                  value={filters.downPayment}
                  onChange={(e) =>
                    handleFilterChange("downPayment", e.target.value)
                  }
                  placeholder="$ 4699"
                  className="bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                  placeholder="Los Angeles CA"
                  className="bg-white"
                />
              </div>

              <div>
                <Button
                  onClick={handleSearch}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Brokers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {brokers.map((broker) => (
              <Link href={`/mortgages-broker/${broker.id}`} key={broker.id}>
                {/* <Card
                 
                  className="p-6 hover:shadow-lg "
                >
                  <div className="text-center mb-4">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={profile.src}
                        alt={broker.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{broker.name}</h3>
                      {broker.verified && (
                        <span className="text-blue-500 text-sm">✓</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {broker.company}
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {broker.rating}
                        </span>
                        <span className="text-sm text-gray-600">
                          ({broker.reviews})
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {broker.experience} years
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      📍 {broker.location}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {broker.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/brokers/${broker.id}`} className="flex-1">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm">
                          View Profile
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="flex-1 text-sm bg-transparent"
                      >
                        Bank Details
                      </Button>
                    </div>
                  </div>
                </Card> */}

<MortgageBrokerCard
 name="Carlos Mendoza" 
 company="MortgagePro Mexico"
 rating={4.9} reviewCount={156} 
 priceRangeMin="$13K"
  priceRangeMax="$3.8M" salesCount={526} imageUrl={profile.src} />

              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
