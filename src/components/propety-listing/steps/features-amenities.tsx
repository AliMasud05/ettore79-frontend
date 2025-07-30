import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { FormData } from "@/components/propety-listing/stepper-form";

interface FeaturesAmenitiesProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function FeaturesAmenities({
  formData,
  updateFormData,
}: FeaturesAmenitiesProps) {
  const handleInteriorAmenityChange = (
    amenity: keyof FormData["interiorAmenities"],
    checked: boolean
  ) => {
    updateFormData({
      interiorAmenities: {
        ...formData.interiorAmenities,
        [amenity]: checked,
      },
    });
  };

  const handleExteriorFeatureChange = (
    feature: keyof FormData["exteriorFeatures"],
    checked: boolean
  ) => {
    updateFormData({
      exteriorFeatures: {
        ...formData.exteriorFeatures,
        [feature]: checked,
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-normal text-gray-900 mb-2">
          Features & Amenities
        </h2>
        <p className="text-gray-600 text-base mt-3">Select all that apply to your property.</p>
      </div>

      <div className="space-y-12">
        {/* Interior Amenities */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Interior Amenities
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="air-conditioning"
                  checked={formData.interiorAmenities.airConditioning}
                  onCheckedChange={(checked) =>
                    handleInteriorAmenityChange(
                      "airConditioning",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="air-conditioning" className="text-base">
                  Air Conditioning
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="walk-in-closet"
                  checked={formData.interiorAmenities.walkInCloset}
                  onCheckedChange={(checked) =>
                    handleInteriorAmenityChange(
                      "walkInCloset",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="walk-in-closet" className="text-base">
                  Walk-in Closet
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="laundry-room"
                  checked={formData.interiorAmenities.laundryRoom}
                  onCheckedChange={(checked) =>
                    handleInteriorAmenityChange(
                      "laundryRoom",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="laundry-room" className="text-base">
                  Laundry Room
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="furnished"
                  checked={formData.interiorAmenities.furnished}
                  onCheckedChange={(checked) =>
                    handleInteriorAmenityChange("furnished", checked as boolean)
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="furnished" className="text-base">
                  Furnished
                </Label>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="heating"
                  checked={formData.interiorAmenities.heating}
                  onCheckedChange={(checked) =>
                    handleInteriorAmenityChange("heating", checked as boolean)
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="heating" className="text-base">
                  Heating
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="fireplace"
                  checked={formData.interiorAmenities.fireplace}
                  onCheckedChange={(checked) =>
                    handleInteriorAmenityChange("fireplace", checked as boolean)
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="fireplace" className="text-base">
                  Fireplace
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="smart-home"
                  checked={formData.interiorAmenities.smartHomeSystem}
                  onCheckedChange={(checked) =>
                    handleInteriorAmenityChange(
                      "smartHomeSystem",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="smart-home" className="text-base">
                  Smart Home System
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="equipped-kitchen"
                  checked={formData.interiorAmenities.equippedKitchen}
                  onCheckedChange={(checked) =>
                    handleInteriorAmenityChange(
                      "equippedKitchen",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="equipped-kitchen" className="text-base">
                  Equipped Kitchen
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Exterior Features */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Exterior Features
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="garden"
                  checked={formData.exteriorFeatures.garden}
                  onCheckedChange={(checked) =>
                    handleExteriorFeatureChange("garden", checked as boolean)
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="garden" className="text-base">
                  Garden
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="swimming-pool"
                  checked={formData.exteriorFeatures.swimmingPool}
                  onCheckedChange={(checked) =>
                    handleExteriorFeatureChange(
                      "swimmingPool",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="swimming-pool" className="text-base">
                  Swimming Pool
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="security"
                  checked={formData.exteriorFeatures.security24_7}
                  onCheckedChange={(checked) =>
                    handleExteriorFeatureChange(
                      "security24_7",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="security" className="text-base">
                  Security 24/7
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="event-room"
                  checked={formData.exteriorFeatures.eventRoom}
                  onCheckedChange={(checked) =>
                    handleExteriorFeatureChange("eventRoom", checked as boolean)
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="event-room" className="text-base">
                  Event Room
                </Label>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="terrace"
                  checked={formData.exteriorFeatures.terraceBalcony}
                  onCheckedChange={(checked) =>
                    handleExteriorFeatureChange(
                      "terraceBalcony",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="terrace" className="text-base">
                  Terrace/Balcony
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="parking"
                  checked={formData.exteriorFeatures.parkingSpace}
                  onCheckedChange={(checked) =>
                    handleExteriorFeatureChange(
                      "parkingSpace",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="parking" className="text-base">
                  Parking Space
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="gym"
                  checked={formData.exteriorFeatures.gym}
                  onCheckedChange={(checked) =>
                    handleExteriorFeatureChange("gym", checked as boolean)
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="gym" className="text-base">
                  Gym
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="pet-friendly"
                  checked={formData.exteriorFeatures.petFriendly}
                  onCheckedChange={(checked) =>
                    handleExteriorFeatureChange(
                      "petFriendly",
                      checked as boolean
                    )
                  }
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="pet-friendly" className="text-base">
                  Pet Friendly
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
