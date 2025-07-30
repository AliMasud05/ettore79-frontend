/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { FormData } from "@/components/propety-listing/stepper-form";

interface BasicInformationProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function BasicInformation({
  formData,
  updateFormData,
}: BasicInformationProps) {
  const handleListingTypeChange = (type: "sale" | "rent") => {
    updateFormData({ listingType: type });
  };

  const handlePropertyTypeChange = (
    type: "house" | "apartment" | "land" | "commercial" | "office" | "other"
  ) => {
    updateFormData({ propertyType: type });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="w-full max-w-6xl border-2 border-gray-200 rounded-lg p-4 space-y-4">
      <div className="mb-8">
        <h2 className="text-3xl md:text-5xl font-normal text-gray-900 mb-2">
          Basic Information
        </h2>
        <p className="text-gray-600 text-base font-normal">
          Tell us about your property and its location
        </p>
      </div>

      <div className="space-y-8">
        {/* Listing Type */}
        <div>
          <Label className="text-base font-medium mb-4 block text-gray-600">
            Listing Type <span className="text-red-500">*</span>
          </Label>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`border rounded-lg p-4 cursor-pointer hover:border-orange-500 ${
                formData.listingType === "sale"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-300"
              }`}
              onClick={() => handleListingTypeChange("sale")}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    formData.listingType === "sale"
                      ? "border-orange-500 bg-orange-500"
                      : "border-gray-300"
                  }`}
                ></div>
                <span className="font-medium">For Sale</span>
              </div>
            </div>
            <div
              className={`border rounded-lg p-4 cursor-pointer hover:border-orange-500 ${
                formData.listingType === "rent"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-300"
              }`}
              onClick={() => handleListingTypeChange("rent")}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    formData.listingType === "rent"
                      ? "border-orange-500 bg-orange-500"
                      : "border-gray-300"
                  }`}
                ></div>
                <span className="font-medium">For Rent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Property Type */}
        <div>
          <Label className="text-base font-medium mb-4 block">
            Property Type <span className="text-red-500">*</span>
          </Label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { key: "house", label: "House" },
              { key: "apartment", label: "Apartment" },
              { key: "land", label: "Land" },
              { key: "commercial", label: "Commercial" },
              { key: "office", label: "Office" },
              { key: "other", label: "Other" },
            ].map((type) => (
              <div
                key={type.key}
                className={`border rounded-lg p-4 cursor-pointer hover:border-orange-500 ${
                  formData.propertyType === type.key
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-300"
                }`}
                onClick={() => handlePropertyTypeChange(type.key as any)}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      formData.propertyType === type.key
                        ? "border-orange-500 bg-orange-500"
                        : "border-gray-300"
                    }`}
                  ></div>
                  <span className="font-medium">{type.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Street Address */}
        <div>
          <Label
            htmlFor="street-address"
            className="text-base font-medium mb-2 block"
          >
            Street Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="street-address"
            className="h-12"
            value={formData.streetAddress}
            onChange={(e) => handleInputChange("streetAddress", e.target.value)}
            placeholder="Enter street address"
          />
        </div>

        {/* City, State, Zip Code */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city" className="text-base font-medium mb-2 block">
              City <span className="text-red-500">*</span>
            </Label>
            <Input
              id="city"
              className="h-12"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Enter city"
            />
          </div>
          <div>
            <Label htmlFor="state" className="text-base font-medium mb-2 block">
              State <span className="text-red-500">*</span>
            </Label>
            <Input
              id="state"
              className="h-12"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="Enter state"
            />
          </div>
          <div>
            <Label
              htmlFor="zip-code"
              className="text-base font-medium mb-2 block"
            >
              Zip Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="zip-code"
              className="h-12"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="Enter zip code"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
