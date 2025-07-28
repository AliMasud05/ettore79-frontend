"use client"; // Required for GSAP animations to work in Next.js

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import house_img from "@/assets/login/Image.png";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function LoginPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize animations
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from(".logo-animation", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });

      // Title animation
      gsap.from(".title-animation", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      });

      // Form elements animation
      gsap.from(".form-element", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      // Image animation
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          x: 100,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.7,
        });
      }

      // Subtle pulse animation for the sign-in button
      gsap.to(".sign-in-btn", {
        scale: 1.02,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="container mx-auto h-screen" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-10 h-full">
        {/* Left Column - Form */}
        <section className="col-span-3 flex flex-col justify-center items-center w-full py-10">
          <div className="flex flex-col justify-start gap-6 max-w-xl w-full px-4">
            {/* Logo */}
            <div className="logo-animation">
              <Image
                src={logo.src}
                alt="Company logo"
                width={216}
                height={40}
                className="h-auto w-54"
                priority
              />
            </div>

            {/* Form Container */}
            <div className="w-full mt-6 overflow-visible" ref={formRef}>
              {/* Title */}
              <div className="title-animation mb-10">
                <h1 className="text-3xl md:text-4xl text-[#3012F0] font-bold secondary-font mb-2">
                  Welcome Back
                </h1>
                <p className="text-base font-normal leading-6 text-gray-600">
                  Please enter your login information
                </p>
              </div>

              {/* Form */}
              <form className="space-y-5 w-full">
                {/* Email Field */}
                <div className="form-element">
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-gray-700 mb-2 ml-1"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="john.watson@example.com"
                    className="w-full rounded-3xl py-6 px-5 placeholder:text-base border-gray-300 focus-visible:ring-[#3012F0]"
                  />
                </div>

                {/* Password Field */}
                <div className="form-element">
                  <label
                    htmlFor="password"
                    className="block text-base font-medium text-gray-700 mb-2 ml-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type="password"
                      id="password"
                      placeholder="••••••••••"
                      className="w-full rounded-3xl py-6 px-5 placeholder:text-base border-gray-300 focus-visible:ring-[#3012F0]"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between form-element">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="border-gray-300" />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember Me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-gray-600 hover:text-[#3012F0] transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Sign In Button - Updated with better visibility */}
                <Button
                  className="w-full py-6 rounded-3xl mt-2 border-2 border-[#FF914C] bg-[#FF914C] hover:border-[#1a0b99] hover:bg-[#1a0b99] text-white text-base font-medium sign-in-btn form-element hover:text-white transition-colors duration-300"
                  type="submit"
                >
                  Sign In
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6 form-element">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Social Login */}
              <div className="form-element">
                <Button
                  variant="outline"
                  className="w-full py-6 text-base rounded-3xl border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <svg className="h-5 w-5 mr-3" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-6 form-element">
                <p className="text-sm text-gray-600">
                  Don&#39;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-[#3012F0] hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column - Image */}
        <section
          className="col-span-5 hidden md:flex flex-col justify-center items-center p-10"
          ref={imageRef}
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden ">
            <Image
              src={house_img.src}
              alt="Modern house with contemporary architecture"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 flex items-end p-10">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-3">
                  Find Your Dream Home
                </h2>
                <p className="text-lg opacity-90">
                  Discover properties that match your lifestyle and budget
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
