"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FeaturesAmenities } from "./steps/features-amenities";
import { PropertyDetails } from "./steps/property-details";
import { PhotosMedia } from "./steps/photos-media";
import { PricingContact } from "./steps/pricing-contact";
import { BasicInformation } from "./steps/basic-information";

export interface FormData {
  // Basic Information
  listingType: "sale" | "rent" | "";
  propertyType:
    | "house"
    | "apartment"
    | "land"
    | "commercial"
    | "office"
    | "other"
    | "";
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  // Property Details
  bedrooms: string;
  fullBathrooms: string;
  halfBathrooms: string;
  builtArea: string;
  lotArea: string;
  yearBuilt: string;
  propertyDescription: string;
  // Features & Amenities
  interiorAmenities: {
    airConditioning: boolean;
    heating: boolean;
    walkInCloset: boolean;
    fireplace: boolean;
    laundryRoom: boolean;
    smartHomeSystem: boolean;
    furnished: boolean;
    equippedKitchen: boolean;
  };
  exteriorFeatures: {
    garden: boolean;
    terraceBalcony: boolean;
    swimmingPool: boolean;
    parkingSpace: boolean;
    security24_7: boolean;
    gym: boolean;
    eventRoom: boolean;
    petFriendly: boolean;
  };
  // Photos & Media
  photos: File[];
  // Pricing & Contact
  price: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}

const steps = [
  { id: 1, name: "Basic Information" },
  { id: 2, name: "Property Details" },
  { id: 3, name: "Features & Amenities" },
  { id: 4, name: "Photos & Media" },
  { id: 5, name: "Pricing & Contact" },
];

export function StepperForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Basic Information
    listingType: "",
    propertyType: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    // Property Details
    bedrooms: "",
    fullBathrooms: "",
    halfBathrooms: "",
    builtArea: "",
    lotArea: "",
    yearBuilt: "",
    propertyDescription: "",
    // Features & Amenities
    interiorAmenities: {
      airConditioning: false,
      heating: false,
      walkInCloset: false,
      fireplace: false,
      laundryRoom: false,
      smartHomeSystem: false,
      furnished: false,
      equippedKitchen: false,
    },
    exteriorFeatures: {
      garden: false,
      terraceBalcony: false,
      swimmingPool: false,
      parkingSpace: false,
      security24_7: false,
      gym: false,
      eventRoom: false,
      petFriendly: false,
    },
    // Photos & Media
    photos: [],
    // Pricing & Contact
    price: "",
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("=== FORM SUBMISSION ===");
    console.log("Complete Form Data:", formData);
    console.log("\n=== BASIC INFORMATION ===");
    console.log("Listing Type:", formData.listingType);
    console.log("Property Type:", formData.propertyType);
    console.log("Address:", {
      street: formData.streetAddress,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    });
    console.log("\n=== PROPERTY DETAILS ===");
    console.log("Bedrooms:", formData.bedrooms);
    console.log("Full Bathrooms:", formData.fullBathrooms);
    console.log("Half Bathrooms:", formData.halfBathrooms);
    console.log("Built Area:", formData.builtArea);
    console.log("Lot Area:", formData.lotArea);
    console.log("Year Built:", formData.yearBuilt);
    console.log("Description:", formData.propertyDescription);
    console.log("\n=== FEATURES & AMENITIES ===");
    console.log("Interior Amenities:", formData.interiorAmenities);
    console.log("Exterior Features:", formData.exteriorFeatures);
    console.log("\n=== PHOTOS & MEDIA ===");
    console.log("Number of Photos:", formData.photos.length);
    console.log("Photos:", formData.photos);
    console.log("\n=== PRICING & CONTACT ===");
    console.log("Price:", formData.price);
    console.log("Contact Info:", {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phoneNumber,
    });
    alert("Form submitted successfully! Check the console for detailed data.");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInformation
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <PropertyDetails
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <FeaturesAmenities
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return (
          <PhotosMedia formData={formData} updateFormData={updateFormData} />
        );
      case 5:
        return (
          <PricingContact formData={formData} updateFormData={updateFormData} />
        );
      default:
        return null;
    }
  };

  return (
    <div className=" px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl secondary-font pb-4 font-bold text-blue-600 mb-8">
          List Your Property
        </h1>

        {/* Updated Stepper */}
        <div className="w-full mx-auto mb-12">
          <div className="relative">
            {/* Steps container */}
            <div className="relative flex justify-between">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center relative z-10"
                >
                  {/* Step circle */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                      step.id <= currentStep
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-white border-2 border-gray-200 text-gray-400"
                    }`}
                  >
                    {step.id}
                  </div>

                  {/* Step name */}
                  <div className="mt-3 text-center">
                    <span
                      className={`text-xs sm:text-sm font-medium transition-colors duration-200 ${
                        step.id === currentStep
                          ? "text-orange-500"
                          : step.id < currentStep
                          ? "text-gray-600"
                          : "text-gray-400"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Background line - spans from first to last step */}
            <div
              className="absolute top-3.5 h-0.5 bg-gray-200"
              style={{
                left: "50%",
                right: "50%",
                width: `calc(100% - 120px)`, // 100% minus the width of two circles (14px each)
                transform: "translateX(-50%)",
              }}
            ></div>

            {/* Progress line */}
            <div
              className="absolute top-3.5 h-0.5 bg-[#FF924D]"
              style={{
                left: "50%",
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                transform: "translateX(-50%)",
                maxWidth: "calc(100% - 120px)", // Same as background line
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white">{renderStep()}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="px-8 py-5 bg-transparent"
        >
          Previous
        </Button>
        {currentStep === steps.length ? (
          <Button
            onClick={handleSubmit}
            className="bg-orange-500 hover:bg-orange-600
             text-white px-8 py-5"
          >
            Submit
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="bg-orange-500 hover:bg-orange-600
            py-5 text-white px-8"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
