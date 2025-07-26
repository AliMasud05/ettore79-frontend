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
