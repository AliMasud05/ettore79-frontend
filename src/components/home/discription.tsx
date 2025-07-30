"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Blog from "./Blog";
import findOiky from "@/assets/home/findOiky.png";
import differentOIky from "@/assets/home/differentOIky.png";
import AtOIKY from "@/assets/home/AtOIKY.png";
import img1 from "@/assets/home/register/img1.png";
import img2 from "@/assets/home/register/img2.png";
import img3 from "@/assets/home/register/img3.jpg";
import img4 from "@/assets/home/register/img4.png";
import img5 from "@/assets/home/register/img5.png";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeDiscription = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  const listItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const registerTextRef = useRef<HTMLDivElement>(null);
  const registerImagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Section 1: What will you find on OIKY?
    gsap.fromTo(
      section1Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate list items with stagger
    gsap.fromTo(
      listItemsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section 2: Why is OIKY different?
    gsap.fromTo(
      section2Ref.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section 3: TRUE AGENT
    gsap.fromTo(
      section3Ref.current?.children || [],
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section 4: Blog
    gsap.fromTo(
      section4Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section 5: Register Text
    gsap.fromTo(
      registerTextRef.current?.children || [],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section5Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Register Images: 3D Spin-In Animation
    const images =
      registerImagesRef.current?.querySelectorAll(".animate-spin-img");
    if (images && images.length > 0) {
      gsap.fromTo(
        images,
        {
          rotationX: () => gsap.utils.random(90, 180),
          rotationY: () => gsap.utils.random(-180, 180),
          opacity: 0,
          scale: 0.7,
          transformOrigin: "center",
        },
        {
          rotationX: 0,
          rotationY: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: section5Ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div>
      {/* What will you find on OIKY? */}
      <section ref={section1Ref} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src={findOiky.src}
                alt="Modern bathroom interior"
                width={1000}
                height={1000}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div>
                <h2 className="text-4xl font-bold  text-black secondary-font mb-8">
                  What is TRUE AGENT?
                </h2>
                <p>
                  Is a unique tool within our platform that goes beyond listing
                  agents. It is a space designed to connect people with trusted,
                  trained, and vetted real estate professionals, providing
                  transparency and trust at every step of the buying, selling
                  and renting process.
                </p>
              </div>
              <div>
                <h2>What can you find on TRUE AGENT?</h2>
                <p>
                  In each real estate agent or mortgage advisor profile, you
                  will see key information such as:
                </p>
                <ul>
                  <li>
                    Professional experience (years in the industry, closed
                    transactions).
                  </li>
                  <li>
                    Specialization (type of properties handled: houses, land,
                    apartments, luxury, investment, Infonavit credit, Fovissste
                    credit, bank loans, etc.).
                  </li>
                  <li>
                    Coverage area (neighborhoods, cities, or regions where they
                    work).
                  </li>
                  <li>
                    Affiliation (whether they are part of a professional
                    association or organization).
                  </li>
                  <li>Reviews (ratings, comments from previous clients).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why is OIKY different? */}
      <section ref={section2Ref} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black secondary-font mb-6">
                Why is OIKY different?
              </h2>
              <div className="flex flex-col text-justify gap-2">
                <p className="text-[#666] text-base font-normal">
                  Because we are not just a portal.
                </p>
                <p className="text-[#666] text-base font-normal">
                  We are a living community that combines technology, trust, and
                  valuable content to transform the real estate industry in
                  Mexico.
                </p>
                <p className="text-[#666] text-base font-normal">
                  Our TRUE AGENT directory and our tools help you achieve real
                  results.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={differentOIky.src}
                alt="Modern house exterior"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUE AGENT Initiative */}
      <section ref={section3Ref} className="py-20 bg-[#FF924D]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold secondary-font  text-black mb-6 leading-12">
                Why use TRUE AGENT?
              </h2>
              <p>
                Because we want both buyers and sellers to make informed and
                confident decisions. By consulting TRUE AGENTTM, you&lsquo;ll
                know who you&rsquo dealing with, their experience, and whether
                they&apos;re the right person to guide you through one of the
                most important decisions of your life.
              </p>
              <div>
                <p className="text-[#666] text-base font-normal mb-4 ">
                  TRUE AGENTTM is also an opportunity to position yourself as a
                  serious and transparent professional, showcase your track
                  record, and build more trust with potential clients. Here,
                  your experience really counts.
                </p>
                <p className="text-[#666] text-base font-normal">
                  We believe that those who respect the buyer&apos;s needs must
                  do so with responsibility, ethics, and professionalism.
                  Therefore, TRUE AGENT<sup>TM</sup> not only connects users
                  with trusted advisors but also fosters a community of
                  transparent and committed agents.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-6">
                <Link href="/true-agent">
                  <Button
                    className="bg-[#FF914C] hover:bg-orange-600
                 text-white px-6 py-6 text-base"
                  >
                    Become a Free Agent
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-gray-300 text-[#666] px-6 py-6 text-base
                   bg-transparent"
                >
                  See more
                </Button>
              </div>
            </div>
            <div>
              <Image
                src={AtOIKY.src}
                alt="Luxury house with pool"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section ref={section4Ref}>
        <Blog />
      </section>

      {/* Register Section */}
      <section ref={section5Ref} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={registerTextRef}>
              <h2 className="text-4xl font-bold text-black secondary-font mb-6">
                Register and Be Part of the New Era of Real Estate
              </h2>
              <div>
                <p className="text-[#666] text-base font-normal mb-2">
                  Today is the first to take the leap.
                </p>
                <p className="text-[#666] text-base font-normal mb-2">
                  Be part of our future with a diverse community that offers the
                  greatest opportunities for growth and success.
                </p>
                <p className="text-[#666] text-base font-normal mb-8">
                  Welcome to the new era of real estate. Welcome to OIKY.
                  Register for free and be part of the real estate revolution in
                  Mexico.
                </p>
              </div>
              <Button
                className="bg-[#FF914C] hover:bg-orange-600
               text-white px-8 py-6 text-base min-w-[250px]"
              >
                {" "}
                Register
              </Button>
            </div>
            <div ref={registerImagesRef} className="gap-4">
              <div className="space-y-2">
                <div className="grid grid-cols-7 gap-1 w-full place-items-baseline">
                  <div></div>
                  <div className="col-span-2 perspective-container">
                    <Image
                      src={img1.src}
                      alt="Modern house"
                      width={200}
                      height={120}
                      className="object-cover w-full h-32 rounded-lg animate-spin-img"
                    />
                  </div>
                  <div className="col-span-3 perspective-container">
                    <Image
                      src={img2.src}
                      alt="Modern house"
                      width={200}
                      height={120}
                      className="object-cover w-full h-52 rounded-lg animate-spin-img"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 w-full">
                  <div className="perspective-container">
                    <Image
                      src={img3.src}
                      alt="Modern house"
                      width={200}
                      height={120}
                      className="object-cover w-full h-30 rounded-lg animate-spin-img"
                    />
                  </div>
                  <div className="perspective-container">
                    <Image
                      src={img4.src}
                      alt="Modern house"
                      width={200}
                      height={120}
                      className="object-cover w-full h-48 rounded-lg animate-spin-img"
                    />
                  </div>
                  <div className="perspective-container">
                    <Image
                      src={img5.src}
                      alt="Modern house"
                      width={200}
                      height={120}
                      className="object-cover w-full h-30 rounded-lg animate-spin-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDiscription;
