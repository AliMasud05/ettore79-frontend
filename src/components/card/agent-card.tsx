"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AgentCardProps {
  name?: string;
  company?: string;
  rating?: number;
  reviewCount?: number;
  priceRangeMin?: string;
  priceRangeMax?: string;
  salesCount?: number;
  imageUrl?: string;
}

export default function AgentCard({
  name = "Olivia Rhye",
  company = "Americorp Real Estate",
  rating = 4.9,
  reviewCount = 127,
  priceRangeMin = "$13K",
  priceRangeMax = "$3.8M",
  salesCount = 526,
  imageUrl = "/agent-photo.png",
}: AgentCardProps) {
  return (
    <Card className="w-[280px] bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
      <CardContent className="p-0">
        {/* Agent Photo */}
        <div className="relative w-full h-[200px] bg-gradient-to-br from-amber-100 to-amber-200">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${name} - Real Estate Agent`}
            fill
            className="object-cover"
            sizes="280px"
          />
        </div>

        {/* Agent Information */}
        <div className="p-4 space-y-3">
          {/* Name */}
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

          {/* Company */}
          <p className="text-sm font-medium text-purple-600">{company}</p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">
              ({reviewCount} reviews)
            </span>
          </div>

          {/* Price Range and Sales */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">
                {priceRangeMin}-{priceRangeMax}
              </span>
              <span className="text-sm text-gray-600">price range</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">
                {salesCount}
              </span>
              <span className="text-sm text-gray-600">
                Sales last 12 months
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
