"use client";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import brokerImage from '@/assets/agent/agent.png'

interface ProfileCardProps {
  name: string;
  rating: number;
  reviewCount: number;
  company: string;
  priceRangeMin: string;
  priceRangeMax: string;
  salesCount: number;
  imageUrl?: string;
}

export default function MortgageBrokerCard({
  name,

}: ProfileCardProps) {
  return (
    <Link href={`/mortgages-broker/${name}`} className="cursor-pointer">
      <Card className="w-full mx-auto bg-white shadow-lg">
        <CardContent className="">
          {/* Profile Image */}
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={brokerImage.src}
              alt="Carlos Mendoza profile photo"
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>

          {/* Name and Verification */}
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-semibold text-gray-900">
              Carlos Mendoza
            </h2>
            <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Rating and Experience */}
          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.9</span>
              <span className="text-sm text-gray-500">(156)</span>
            </div>
            <span className="text-sm text-gray-500">12 years</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            MortgagePro México
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 mb-4">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Ciudad de México</span>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-100"
            >
              First-time buyers
            </Badge>
            <Badge
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-100"
            >
              Investment properties
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
              View Profile
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              Bank Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
