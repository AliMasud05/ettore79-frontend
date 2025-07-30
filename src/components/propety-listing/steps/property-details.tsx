"use client";

import type { FormData } from "@/components/propety-listing/stepper-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

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
  console.log(handleSelectChange);

  const handleTextareaChange = (value: string) => {
    updateFormData({ propertyDescription: value });
  };

  const handleNumberChange = (field: keyof FormData, value: string) => {
    // Only allow numbers, remove any non-digit characters
    const numericValue = value.replace(/\D/g, "");
    updateFormData({ [field]: numericValue });
  };

  const handleYearSelect = (date: Date | undefined) => {
    if (date) {
      updateFormData({ yearBuilt: date.getFullYear().toString() });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-5xl font-normal text-gray-900 mb-2">
          Property Details
        </h2>
        <p className="text-gray-600">
          Tell us about your property and its location
        </p>
      </div>
      <div className="space-y-6">
        {/* Bedrooms, Full Bathrooms, Half Bathrooms */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <Label
              htmlFor="bedrooms"
              className="text-base font-medium mb-2 block"
            >
              Bedrooms <span className="text-red-500">*</span>
            </Label>
            <Input
              id="bedrooms"
              type="number"
              min="1"
              placeholder="Enter number of bedrooms"
              value={formData.bedrooms}
              onChange={(e) => handleNumberChange("bedrooms", e.target.value)}
              className="h-12"
            />
          </div>
          <div>
            <Label
              htmlFor="full-bathrooms"
              className="text-base font-medium mb-2 block"
            >
              Full Bathrooms <span className="text-red-500">*</span>
            </Label>
            <Input
              id="full-bathrooms"
              type="number"
              min="1"
              placeholder="Enter number of full bathrooms"
              value={formData.fullBathrooms}
              onChange={(e) =>
                handleNumberChange("fullBathrooms", e.target.value)
              }
              className="h-12"
            />
          </div>
          <div>
            <Label
              htmlFor="half-bathrooms"
              className="text-base font-medium mb-2 block"
            >
              Half Bathrooms <span className="text-red-500">*</span>
            </Label>
            <Input
              id="half-bathrooms"
              type="number"
              min="0"
              placeholder="Enter number of half bathrooms"
              value={formData.halfBathrooms}
              onChange={(e) =>
                handleNumberChange("halfBathrooms", e.target.value)
              }
              className="h-12"
            />
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
            <Input
              id="built-area"
              type="number"
              min="50"
              placeholder="Enter built area in m²"
              value={formData.builtArea}
              onChange={(e) => handleNumberChange("builtArea", e.target.value)}
              className="h-12"
            />
          </div>
          <div>
            <Label
              htmlFor="lot-area"
              className="text-base font-medium mb-2 block"
            >
              Lot Area (m²)
            </Label>
            <Input
              id="lot-area"
              type="number"
              min="50"
              placeholder="Enter lot area in m²"
              value={formData.lotArea}
              onChange={(e) => handleNumberChange("lotArea", e.target.value)}
              className="h-12"
            />
          </div>
        </div>

        {/* Year Built - Calendar Selector */}
        <div className="max-w-md">
          <Label
            htmlFor="year-built"
            className="text-base font-medium mb-2 block"
          >
            Year Built
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="w-full h-12 justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.yearBuilt ? (
                  format(new Date(parseInt(formData.yearBuilt), 1, 1), "yyyy")
                ) : (
                  <span>Select year built</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={
                  formData.yearBuilt
                    ? new Date(parseInt(formData.yearBuilt), 0, 1)
                    : undefined
                }
                onSelect={handleYearSelect}
                initialFocus
                defaultMonth={new Date(2020, 0)}
                fromYear={1900}
                toYear={new Date().getFullYear()}
                captionLayout="dropdown"
             
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
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
