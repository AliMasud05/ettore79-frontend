/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Required for GSAP animations to work in Next.js

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner"; // For notifications
import house_img from "@/assets/login/Image.png";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/api/authApi";

export default function SignUpPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
  });
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();

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

      // Subtle pulse animation for the sign-up button
      gsap.to(".sign-up-btn", {
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

  // Form validation
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      role: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    }
    if (!formData.role) {
      newErrors.role = "Please select a role";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        role: formData.role,
      }).unwrap();

      if (response.success) {
        toast.success("Registration successful! Redirecting to sign-in...");
        setTimeout(() => router.push("/signin"), 2000);
      }
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="container mx-auto h-screen" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-10 h-full">
        {/* Left Column - Form */}
        <section className="col-span-3 flex flex-col justify-center items-center w-full py-10">
          <div className="flex flex-col justify-start gap-2 max-w-xl w-full px-4">
            {/* Logo */}
            <div className="logo-animation">
              <Link href="/">
                <Image
                  src={logo.src}
                  alt="Company logo"
                  width={216}
                  height={40}
                  className="h-auto w-54"
                  priority
                />
              </Link>
            </div>

            {/* Form Container */}
            <div className="w-full mt-4 overflow-visible" ref={formRef}>
              {/* Title */}
              <div className="title-animation mb-6">
                <h1 className="text-3xl md:text-4xl text-[#3012F0] font-bold secondary-font mb-2">
                  Sign Up
                </h1>
                <p className="text-base font-normal leading-6 text-gray-600">
                  Please enter the information to create an account.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                {/* Role Selection */}
                <div className="form-element">
                  <label
                    htmlFor="role"
                    className="block text-base font-medium text-gray-700 mb-2 ml-1"
                  >
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full rounded-3xl py-4 px-5 text-base border-1 border-gray-300 focus-visible:ring-[#3012F0] focus:border-[#3012F0] bg-white"
                  >
                    <option value="">Select your role</option>
                    <option value="ADMIN">Admin</option>
                    <option value="BUYER">Buyer</option>
                    <option value="SELLER">Seller</option>
                    <option value="AGENT">Agent</option>
                    <option value="BROKER">Broker</option>
                    <option value="LANDLORD">Landlord</option>
                  </select>
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                  )}
                </div>

                {/* Name Field */}
                <div className="form-element">
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-gray-700 mb-2 ml-1"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Watson"
                    className="w-full rounded-3xl py-6 px-5 placeholder:text-base border-gray-300 focus-visible:ring-[#3012F0]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.watson@example.com"
                    className="w-full rounded-3xl py-6 px-5 placeholder:text-base border-gray-300 focus-visible:ring-[#3012F0]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Mobile Number Field */}
                <div className="form-element">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-base font-medium text-gray-700 mb-2 ml-1"
                  >
                    Mobile Number
                  </label>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 890"
                    className="w-full rounded-3xl py-6 px-5 placeholder:text-base border-gray-300 focus-visible:ring-[#3012F0]"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
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
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••••"
                      className="w-full rounded-3xl py-6 px-5 placeholder:text-base border-gray-300 focus-visible:ring-[#3012F0]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
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

                {/* Sign Up Button */}
                <Button
                  className="w-full py-6 rounded-3xl mt-2 border-2 border-[#FF914C] bg-[#FF914C] hover:border-[#1a0b99] hover:bg-[#1a0b99] text-white text-base font-medium sign-up-btn form-element hover:text-white transition-colors duration-300"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing Up..." : "Sign Up"}
                </Button>
              </form>

              {/* Sign In Link */}
              <div className="text-center mt-6 form-element">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="font-medium text-[#3012F0] hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column - Image */}
        <section
          className="col-span-5 hidden md:flex flex-col justify-center items-center p-10 h-auto"
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
