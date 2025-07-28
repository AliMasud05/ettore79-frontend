"use client";
import property_img from "@/assets/property/image 1665.png";
import { Bath, Bed, Heart, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
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
          <div className="absolute top-6 left-4">
            <span className="bg-orange-500 text-white 
            px-3 py-[5px] rounded-full text-xs font-medium">
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
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-md flex items-center gap-1 text-xs font-medium">
              <Star className="w-4 h-3 fill-current" />
              5.0
            </div>
            <h2 className="text-base font-semibold text-blue-600 leading-tight text-wrap md:text-nowrap">
              Serenity at Whispering Pines Retreat
            </h2>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M7.25101 16.875H7.24956C6.7215 16.8746 6.22493 16.6686 5.8517 16.2947L0.594323 11.0298C-0.17465 10.2594 -0.17465 9.00584 0.594323 8.23552L7.68132 1.13492C8.41169 0.403128 9.38345 0 10.4175 0H14.9139C16.0042 0 16.8914 0.886992 16.8914 1.97754V6.46006C16.8914 7.49342 16.4887 8.46479 15.7576 9.19503L8.64857 16.2967C8.27511 16.6696 7.77877 16.875 7.25101 16.875ZM10.4175 1.31836C9.73611 1.31836 9.09576 1.58398 8.61448 2.06621L1.52738 9.16681C1.27101 9.42368 1.27101 9.84144 1.52738 10.0983L6.78473 15.3632C6.90905 15.4877 7.07448 15.5565 7.25058 15.5566H7.25111C7.33762 15.5569 7.42333 15.5399 7.50327 15.5069C7.58321 15.4738 7.6558 15.4252 7.71686 15.3639L14.8259 8.26242C15.3077 7.78122 15.573 7.14102 15.573 6.46009V1.97754C15.573 1.61407 15.2773 1.31836 14.9139 1.31836H10.4175ZM12.1122 6.69067C11.0218 6.69067 10.1347 5.80368 10.1347 4.71313C10.1347 3.62259 11.0218 2.73559 12.1122 2.73559C13.2027 2.73559 14.0898 3.62259 14.0898 4.71313C14.0898 5.80368 13.2027 6.69067 12.1122 6.69067ZM12.1122 4.05395C11.7488 4.05395 11.4531 4.34966 11.4531 4.71313C11.4531 5.0766 11.7488 5.37231 12.1122 5.37231C12.4758 5.37231 12.7714 5.0766 12.7714 4.71313C12.7714 4.34966 12.4758 4.05395 12.1122 4.05395Z"
                fill="#FF924D"
              />
            </svg>
            <span className="text-xl font-bold text-orange-500">$120</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 text-sm">3891 Ranchview Dr. Richardson, California
            </span>
          </div>

          {/* Property Details */}
          <div className="flex items-center flex-wrap gap-6 text-gray-600 ">
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
