"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { FormData } from "@/components/propety-listing/stepper-form";

interface PricingContactProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function PricingContact({
  formData,
  updateFormData,
}: PricingContactProps) {
  const handleInputChange = (field: keyof FormData, value: string) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-12">
        {/* Pricing Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Pricing</h2>
          <p className="text-gray-600 mb-8">
            Set your price and provide contact details for interested buyers.
          </p>

          <div>
            <Label htmlFor="price" className="text-base font-medium mb-2 block">
              Price <span className="text-red-500">*</span>
            </Label>
            <Input
              id="price"
              placeholder="34000"
              className="h-12 text-lg"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
              type="number"
            />
          </div>
        </div>

        {/* Contact Information Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-8">
            This information will be displayed to potential buyers.
          </p>

          <div className="space-y-6">
            <div>
              <Label
                htmlFor="full-name"
                className="text-base font-medium mb-2 block"
              >
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="full-name"
                placeholder="Your Full Name"
                className="h-12"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
              />
            </div>

            <div>
              <Label
                htmlFor="email"
                className="text-base font-medium mb-2 block"
              >
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@gmail.com"
                className="h-12"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            <div>
              <Label
                htmlFor="phone"
                className="text-base font-medium mb-2 block"
              >
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="h-12"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
