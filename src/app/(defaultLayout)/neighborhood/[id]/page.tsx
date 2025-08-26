"use client";
import ExploreArea, { LeafletMap } from "@/components/map/leaflet-map";
import { AgentsSection } from "@/components/neiborhood/agents-section";
import { HomesSection } from "@/components/neiborhood/home-sections";
import { NeighborhoodOverview } from "@/components/neiborhood/neighborhood-overview";
import { NeighborhoodPhotos } from "@/components/neiborhood/neighborhood-photos";
import { SchoolsSection } from "@/components/neiborhood/schools-section";
import { DollarSign, Home, CalendarIcon } from 'lucide-react';
import Image from "next/image";
import vista from '@/assets/property/image 1665.png'
import { Calendar } from '@/components/ui/calendar';

export default function NeighborhoodDetailPage() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-8">
      <section
        className="border border-gray-200 rounded-lg max-h-[700px]
        grid grid-cols-1 md:grid-cols-2 container mx-auto justify-center gap-4 mt-10"
      >
        <section>
          <Image
            height={1000}
            width={1000}
            src={vista.src}
            alt="Old West Austin neighborhood view"
            className="object-cover "
          />
        </section>
        <section>
          <div>
            <h1 className="text-3xl font-semibold leading-12 mb-6">
              Neighborhood Overview
            </h1>
            <div className="grid grid-cols-2 gap-4 my-4">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                    >
                      <path
                        d="M1.8028 6.1475L0.0552992 17.165C-0.109701 18.2525 0.197799 19.3475 0.910299 20.1875C1.26254 20.5989 1.69963 20.9293 2.19159 21.1558C2.68354 21.3824 3.21869 21.4998 3.7603 21.5H16.2403C17.3353 21.5 18.3778 21.02 19.0903 20.1875C19.4412 19.7745 19.6992 19.2908 19.8468 18.7693C19.9943 18.2478 20.0279 17.7006 19.9453 17.165L18.1978 6.1475C18.1179 5.61708 17.8494 5.13325 17.4417 4.78473C17.0339 4.43621 16.5142 4.24636 15.9778 4.25H14.4328C14.0728 2.1275 12.2278 0.5 10.0003 0.5C7.7728 0.5 5.9278 2.1275 5.5678 4.25H4.0228C2.9053 4.25 1.9753 5.045 1.8028 6.1475ZM10.0003 2C11.3953 2 12.5578 2.96 12.8953 4.25H7.1053C7.4428 2.96 8.6053 2 10.0003 2ZM6.2503 7.25C6.6628 7.25 7.0003 7.58 7.0003 8C7.0003 9.65 8.3428 11 10.0003 11C11.6578 11 13.0003 9.65 13.0003 8C13.0003 7.58 13.3378 7.25 13.7503 7.25C14.1628 7.25 14.5003 7.58 14.5003 8C14.5003 10.4825 12.4828 12.5 10.0003 12.5C7.5178 12.5 5.5003 10.4825 5.5003 8C5.5003 7.58 5.8378 7.25 6.2503 7.25Z"
                        fill="#666666"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span>Buy:</span>
                    <span>$170K - $5.4M</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="flex items-center justify-between ">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl ">Map</h3>
              <div>
                <Image
                  src={vista.src}
                  width={1000}
                  height={1000}
                  alt="Old West Austin neighborhood view"
                  className="object-cover max-w-2xs rounded-2xl "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3>All Photos</h3>
              <Image
                src={vista.src}
                width={1000}
                height={1000}
                alt="Old West Austin neighborhood view"
                className="object-cover max-w-2xs rounded-2xl "
              />
            </div>
          </section>
          <section className="flex items-center justify-around ">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 mb-6"
              >
                <div>
                  <h3>Map</h3>
                  <div>
                    <Image
                      src={vista.src}
                      width={1000}
                      height={1000}
                      alt="Old West Austin neighborhood view"
                      className="object-cover w-40 rounded-2xl "
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>

      {/* Explore the Area Section */}
      <ExploreArea />
    </div>
  );
}
