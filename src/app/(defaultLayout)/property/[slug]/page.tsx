"use client";

import type React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Star,
  MapPin,
  Bed,
  Bath,
  Users,
  Home,
  Dumbbell,
  Flower,
  Wifi,
  Shield,
  Phone,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import agent from "@/assets/placeholders/user.png";
import property_img1 from "@/assets/property/Modern House in Polanco.png";
import property_img2 from "@/assets/property/placeholder.svg fill.png";
import property_img3 from "@/assets/property/Vista 2.png";
import property_img4 from "@/assets/property/Vista 4.png";
import property_img5 from "@/assets/property/image 1665.png";
import map_img from "@/assets/map/map.png";
import map_img2 from "@/assets/map/map2.png";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PropertyDetailPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const similarPropertiesRef = useRef<HTMLDivElement>(null);

  const propertyImag = [
    property_img2,
    property_img3,
    property_img4,
    property_img5,
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Main image animation
      gsap.fromTo(
        mainImageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.3 }
      );

      // Thumbnail images stagger animation
      gsap.fromTo(
        thumbnailsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.6,
        }
      );

      // Property details cards animation
      gsap.fromTo(
        detailsRef.current?.querySelectorAll(".detail-card") || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: detailsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Amenities animation
      gsap.fromTo(
        amenitiesRef.current?.querySelectorAll(".amenity-item") || [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: amenitiesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Location section animation
      gsap.fromTo(
        locationRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: locationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Reviews section animation
      gsap.fromTo(
        reviewsRef.current?.querySelectorAll(".review-item") || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Sidebar animation
      gsap.fromTo(
        sidebarRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.8 }
      );

      // Similar properties animation
      gsap.fromTo(
        similarPropertiesRef.current?.querySelectorAll(".similar-property") ||
          [],
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: similarPropertiesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Button hover animations
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  // Image hover animations
  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleImageLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Star rating hover animation
  const handleStarHover = (e: React.MouseEvent<SVGElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      rotation: 15,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleStarLeave = (e: React.MouseEvent<SVGElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div ref={headerRef} className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-4xl secondary-font font-bold text-purple-700 mb-1">
            Modern House in Polanco
          </h1>
          <div className="flex flex-col gap-3 text-gray-600 mt-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-base font-normal">
                  Av. Presidente Masaryk 123, Polanco, Miguel Hidalgo, 11560
                  Ciudad de México, CDMX
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-orange-500 py-1 px-5 rounded-2xl">
                For Sale
              </Badge>
              <Badge className="bg-orange-500 py-1 px-5 rounded-2xl">
                Featured
              </Badge>
              <div className="text-xl font-semibold ml-4">$8.5M</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <Heart className="h-5 w-5" />
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div
            ref={mainImageRef}
            className="relative mb-4 rounded-lg overflow-hidden cursor-pointer"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <Image
              src={property_img1.src}
              alt="Modern House in Polanco"
              width={800}
              height={500}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div
            ref={thumbnailsRef}
            className="flex gap-2 mb-8 overflow-x-auto pb-2"
          >
            {propertyImag.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Property image ${index + 1}`}
                  width={150}
                  height={100}
                  className="rounded-md h-20 w-28 object-cover"
                />
              </div>
            ))}
          </div>

          <div
            ref={detailsRef}
            className="border rounded-lg p-2 z-10 bg-white mb-10"
          >
            <h2 className="text-2xl font-normal mb-4 p-4">Property Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
              <div className="detail-card flex flex-col items-center p-4">
                <Bed className="h-6 w-6 text-orange-500 mb-2" />
                <span className="text-xl font-bold">4</span>
                <span className="text-sm text-gray-500">Bedrooms</span>
              </div>
              <div className="detail-card flex flex-col items-center p-4">
                <Bath className="h-6 w-6 text-orange-500 mb-2" />
                <span className="text-xl font-bold">3</span>
                <span className="text-sm text-gray-500">Bathrooms</span>
              </div>
              <div className="detail-card flex flex-col items-center p-4">
                <Home className="h-6 w-6 text-orange-500 mb-2" />
                <span className="text-xl font-bold">350</span>
                <span className="text-sm text-gray-500">sqm built</span>
              </div>
              <div className="detail-card flex flex-col items-center p-4">
                <Users className="h-6 w-6 text-orange-500 mb-2" />
                <span className="text-xl font-bold">2</span>
                <span className="text-sm text-gray-500">Parking</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm px-16">
              <div className="detail-card flex flex-col p-4">
                <span className="text-gray-500">Lot Size</span>
                <span className="font-bold">500 m²</span>
              </div>
              <div className="detail-card flex flex-col p-4">
                <span className="text-gray-500">Year Built</span>
                <span className="font-bold">2020</span>
              </div>
              <div className="detail-card flex flex-col p-4">
                <span className="text-gray-500">Type</span>
                <span className="font-bold">Casa</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              Beautiful modern house with luxury finishes in the exclusive
              Polanco area. This property features spacious areas, contemporary
              design and the best amenities. Perfect for families seeking
              comfort and elegance in one of the city's best locations.
            </p>
          </div>

          <div ref={amenitiesRef} className="mb-8">
            <h2 className="text-xl font-bold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="amenity-item flex items-center gap-2">
                <Users className="h-5 w-5 text-orange-500" />
                <span>2 Parking Spaces</span>
              </div>
              <div className="amenity-item flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-orange-500" />
                <span>Gym</span>
              </div>
              <div className="amenity-item flex items-center gap-2">
                <Flower className="h-5 w-5 text-orange-500" />
                <span>Private Garden</span>
              </div>
              <div className="amenity-item flex items-center gap-2">
                <Wifi className="h-5 w-5 text-orange-500" />
                <span>High-Speed Internet</span>
              </div>
              <div className="amenity-item flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-500" />
                <span>24/7 Security</span>
              </div>
            </div>
          </div>

          <div ref={locationRef} className="mb-8">
            <h2 className="text-xl font-bold mb-4">Location Information</h2>
            <Tabs defaultValue="map">
              <TabsList className="mb-4">
                <TabsTrigger value="map">Map</TabsTrigger>
                <TabsTrigger value="schools">Schools</TabsTrigger>
              </TabsList>
              <TabsContent value="map">
                <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={map_img.src}
                    alt="Map"
                    width={800}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </TabsContent>
              <TabsContent value="schools">
                <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={map_img2.src}
                    alt="Schools Map"
                    width={800}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div ref={reviewsRef} className="mb-8">
            <h2 className="text-xl font-bold mb-4">What Users Are Saying</h2>
            <div className="review-item p-4 mb-4">
              <div className="flex items-center mb-2">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                  <Image
                    src={agent.src}
                    alt="Agent"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Alexa Johnson</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-orange-500 fill-orange-500 cursor-pointer"
                        onMouseEnter={handleStarHover}
                        onMouseLeave={handleStarLeave}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Molthy helped me find someone to cook a few meals when I was
                overwhelmed. The support felt real. I'm so grateful for this
                platform!
              </p>
            </div>
            <div className="review-item p-4">
              <h3 className="font-semibold mb-4">Add your Review</h3>
              <div className="mb-4">
                <p className="mb-2">Your Rating</p>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-gray-300 cursor-pointer hover:text-orange-500"
                      onMouseEnter={handleStarHover}
                      onMouseLeave={handleStarLeave}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-2">Your Review</p>
                <Textarea placeholder="Enter Your Review" className="h-24" />
              </div>
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div
            ref={sidebarRef}
            className="border rounded-lg p-6 sticky top-6 z-100 bg-white"
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                <Image
                  src={agent.src}
                  alt="Agent"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-base">Maria González</h3>
                <p className="text-sm text-gray-600">
                  Certified Real Estate Agent
                </p>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-orange-500 fill-orange-500" />
                  <span className="text-xs ml-1">4.9 (27 reviews)</span>
                </div>
                <p className="text-xs text-gray-600">8 years of experience</p>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    className="py-5 placeholder:text-sm"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <Input
                    className="py-5 placeholder:text-sm"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <Input
                  className="py-5 placeholder:text-sm"
                  type="email"
                  placeholder="you@company.com"
                />
              </div>
              <div className="flex">
                <select
                  className="border rounded-l-md px-1 
                 py-2 bg-white text-sm w-20"
                >
                  <option>US</option>
                  <option>MX</option>
                  <option>CA</option>
                </select>
                <Input
                  placeholder="+1 (555) 000-0000"
                  className="rounded-l-none py-5"
                />
              </div>
              <div>
                <Textarea placeholder="Message" className="h-32" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="privacy" className="mr-2" />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  You agree to our friendly privacy policy
                </label>
              </div>
              <Button
                className="w-full text-sm bg-orange-500 hover:bg-orange-600 py-5"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Send message
              </Button>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="w-full py-5 flex items-center justify-center gap-2 bg-transparent"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  <Phone color="#c03030" strokeWidth={2.25} />
                  Whatsapp
                </Button>
              </div>
            </form>
          </div>

          <div ref={similarPropertiesRef} className="mt-8 z-30">
            <h3 className="text-xl font-bold mb-4">Similar Properties</h3>
            <div className="space-y-4">
              {propertyImag.map((image, index) => (
                <div
                  key={index}
                  className="similar-property border rounded-lg overflow-hidden flex cursor-pointer"
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                >
                  <div className="w-1/3">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt="Similar property"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-3">
                    <h4 className="font-medium text-sm">Casa en Polanco</h4>
                    <p className="text-orange-500 font-bold">$2.7M</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-2">Beds: 3</span>
                      <span>Baths: 2</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button
                variant="link"
                className="text-orange-500"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                View More Similar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
