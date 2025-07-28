"use client";
import { Facebook,  Linkedin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function ProfileCard({
  name,
  rating,
  reviewCount,
  company,
  priceRangeMin,
  priceRangeMax,
  salesCount,
  imageUrl,

}: ProfileCardProps) {
  return (
    
    <Link href={`/agent/${name}`} className="cursor-pointer">
      <div className="w-auto h-[430px] relative bg-stone-100 shadow-lg border-0 rounded-lg overflow-hidden">
        <div>
          <Image
            src={
              imageUrl ||
              "/placeholder.svg?height=280&width=320&query=professional woman in cream blazer with red rose"
            }
            alt={`${name} - Real Estate Agent`}
            height={1000}
            width={1000}
            className="object-cover  h-[220px]"
            sizes="320px"
          />
        </div>
        <div className=" p-3 space-y-3">
          {/* Name and Rating */}
          <div className="flex justify-between">
            <h3 className="text-xl font-normal text-[#181D27]">{name}</h3>
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className=" text-sm font-medium text-gray-900">
                  {rating}
                </span>
              </div>
              <span className="text-sm text-gray-600">
                ({reviewCount} reviews)
              </span>
            </div>
          </div>
          {/* Company */}
          <div>
            <p className="text-blue-600 font-light text-xl">{company}</p>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-1">
            <p className="text-base font-medium flex gap-3 text-gray-900">
              <span className="font-normal text-base ">
                {priceRangeMin}-{priceRangeMax}
              </span>{" "}
              <span>price range</span>
            </p>
            <p className="text-base font-medium flex gap-3 text-gray-900">
              <span className="font-normal text-base">{salesCount}</span>
              <span>Sales last 12 months</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 pt-2">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors border bg-amber-50 rounded-sm hover:bg-amber-100">
              <Facebook className="w-5 h-5 " />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-blue-700 transition-colors
          border bg-amber-50 rounded-sm hover:bg-amber-100
          "
            >
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
