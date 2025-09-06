/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { toast } from "sonner"; // For notifications
import customerService from "@/assets/contact/Image (13).png"; // Adjust the path as needed
import { useCreateContactMutation } from "@/redux/api/contactApi";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  message: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "US",
    message: "",
  });
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    privacy: "",
  });
  const [createContact, { isLoading }] = useCreateContactMutation();

  const countryCodes = [
    { code: "US", label: "🇺🇸 +1", value: "+1" },
    { code: "GB", label: "🇬🇧 +44", value: "+44" },
    { code: "CA", label: "🇨🇦 +1", value: "+1" },
    { code: "AU", label: "🇦🇺 +61", value: "+61" },
    { code: "DE", label: "🇩🇪 +49", value: "+49" },
    { code: "FR", label: "🇫🇷 +33", value: "+33" },
    { code: "MX", label: "🇲🇽 +52", value: "+52" },
    { code: "BD", label: "🇧🇩 +880", value: "+880" }, // Added for the example payload
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      privacy: "",
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    if (!privacyChecked) {
      newErrors.privacy = "You must agree to the privacy policy";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: `${
          countryCodes.find((c) => c.code === formData.countryCode)?.value || ""
        }${formData.phoneNumber}`,
        message: formData.message,
      };

      const response = await createContact(payload).unwrap();
      console.log(response,"response of contact")
      toast.success("Message sent successfully!");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        countryCode: "US",
        message: "",
      });
      setPrivacyChecked(false);
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Failed to send message. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Contact Form */}
            <div className="p-8 lg:p-12">
              <div className="max-w-md mx-auto lg:mx-0">
                <h1 className="text-5xl secondary-font font-bold text-blue-600 mb-3">
                  Get in touch
                </h1>
                <p className="text-gray-600 mb-8">
                  Our friendly team would love to hear from you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-[#414651] mb-2 block"
                      >
                        First name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="h-11 py-6"
                        required
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-[#414651] mb-2 block"
                      >
                        Last name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="h-11 py-6"
                        required
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-[#414651] mb-2 block"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="h-11 py-6"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-[#414651] mb-2 block"
                    >
                      Phone number
                    </Label>
                    <div className="flex gap-3">
                      <Select
                        value={formData.countryCode}
                        onValueChange={(value) =>
                          handleInputChange("countryCode", value)
                        }
                      >
                        <SelectTrigger className="w-24 h-11">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          handleInputChange("phoneNumber", e.target.value)
                        }
                        className="flex-1 h-11"
                        required
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Leave us a message..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="min-h-[120px] resize-none"
                      required
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Policy */}
                  <div className="text-sm text-[#414651] flex items-center">
                    <span className="mr-3">
                      <input
                        type="checkbox"
                        id="privacy-policy"
                        name="privacy-policy"
                        checked={privacyChecked}
                        onChange={(e) => {
                          setPrivacyChecked(e.target.checked);
                          setErrors((prev) => ({ ...prev, privacy: "" }));
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                    </span>
                    <span className="mr-1">You agree to our friendly</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      privacy policy
                    </a>
                    .
                    {errors.privacy && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.privacy}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#FF924D] hover:bg-orange-600 text-white h-12 text-base font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative min-h-[500px] lg:min-h-full">
              <Image
                src={customerService.src}
                alt="Friendly customer service team ready to help"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
