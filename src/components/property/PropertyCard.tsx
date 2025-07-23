"use client";
import { Heart, Star, Key, MapPin, Bed, Bath, Users,  } from "lucide-react";
import Image from "next/image";
import property_img from "@/assets/property/image 1665.png";
import Link from "next/link";

export default function PropertyCard() {
  return (
    <Link href="/property/serenity-retreat">
      {" "}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative">
          <Image
            src={property_img.src}
            alt="Modern house in misty forest setting"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />

          {/* For Sale Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              For Sale
            </span>
          </div>

          {/* Heart Icon */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors cursor-pointer">
              <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating and Title */}
          <div className="flex items-start gap-3 mb-3">
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-md flex items-center gap-1 text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              5.0
            </div>
            <h2 className="text-xl font-semibold text-blue-600 leading-tight">
              Serenity at Whispering Pines Retreat
            </h2>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <Key className="w-5 h-5 text-orange-500" />
            <span className="text-2xl font-bold text-orange-500">$120</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 text-sm">
              3891 Ranchview Dr. Richardson, California
            </span>
          </div>

          {/* Property Details */}
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span className="text-sm">5 bedrooms</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span className="text-sm">6 baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">6 Guests</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
