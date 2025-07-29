"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormData } from "@/components/propety-listing/stepper-form";


interface PropertyDetailsProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function PropertyDetails({
  formData,
  updateFormData,
}: PropertyDetailsProps) {
  const handleSelectChange = (field: keyof FormData, value: string) => {
    updateFormData({ [field]: value });
  };

  const handleTextareaChange = (value: string) => {
    updateFormData({ propertyDescription: value });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Property Details
        </h2>
        <p className="text-gray-600">
          Tell us about your property and its location
        </p>
      </div>

      <div className="space-y-8">
        {/* Bedrooms, Full Bathrooms, Half Bathrooms */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <Label
              htmlFor="bedrooms"
              className="text-base font-medium mb-2 block"
            >
              Bedrooms <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.bedrooms}
              onValueChange={(value) => handleSelectChange("bedrooms", value)}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="full-bathrooms"
              className="text-base font-medium mb-2 block"
            >
              Full Bathrooms <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.fullBathrooms}
              onValueChange={(value) =>
                handleSelectChange("fullBathrooms", value)
              }
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="half-bathrooms"
              className="text-base font-medium mb-2 block"
            >
              Half Bathrooms <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.halfBathrooms}
              onValueChange={(value) =>
                handleSelectChange("halfBathrooms", value)
              }
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select half bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Built Area, Lot Area */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="built-area"
              className="text-base font-medium mb-2 block"
            >
              Built Area (m²) <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.builtArea}
              onValueChange={(value) => handleSelectChange("builtArea", value)}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select built area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="150">150</SelectItem>
                <SelectItem value="200">200</SelectItem>
                <SelectItem value="250">250</SelectItem>
                <SelectItem value="300">300</SelectItem>
                <SelectItem value="400">400+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="lot-area"
              className="text-base font-medium mb-2 block"
            >
              Lot Area (m²)
            </Label>
            <Select
              value={formData.lotArea}
              onValueChange={(value) => handleSelectChange("lotArea", value)}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select lot area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="200">200</SelectItem>
                <SelectItem value="250">250</SelectItem>
                <SelectItem value="300">300</SelectItem>
                <SelectItem value="400">400</SelectItem>
                <SelectItem value="500">500+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Year Built */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="year-built"
              className="text-base font-medium mb-2 block"
            >
              Year Built
            </Label>
            <Select
              value={formData.yearBuilt}
              onValueChange={(value) => handleSelectChange("yearBuilt", value)}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select year built" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
                <SelectItem value="2017">2017</SelectItem>
                <SelectItem value="2016">2016</SelectItem>
                <SelectItem value="2015">2015</SelectItem>
                <SelectItem value="2010">2010</SelectItem>
                <SelectItem value="2008">2008</SelectItem>
                <SelectItem value="2005">2005</SelectItem>
                <SelectItem value="2000">2000</SelectItem>
                <SelectItem value="older">Older</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Property Description */}
        <div>
          <Label
            htmlFor="property-description"
            className="text-base font-medium mb-2 block"
          >
            Property Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="property-description"
            placeholder="Describe your property in detail, highlighting its best features."
            className="min-h-[120px] resize-none"
            value={formData.propertyDescription}
            onChange={(e) => handleTextareaChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
