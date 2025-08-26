import { MapPin, DollarSign, Home, TrendingUp } from "lucide-react";
import Image from "next/image";

export function NeighborhoodOverview() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h2 className="text-xl font-semibold mb-4">Neighborhood Overview</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Median Home Price</span>
          </div>
          <span className="font-semibold">$1.2M</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Rent</span>
          </div>
          <span className="font-semibold">$4.5K</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Price Trend</span>
          </div>
          <span className="font-semibold text-green-600">+5.2%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Walk Score</span>
          </div>
          <span className="font-semibold">89</span>
        </div>
      </div>

      {/* Map */}
      <div className="mt-6">
        <h3 className="font-medium mb-3">Map</h3>
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <Image
width={1000}
height={1000}
            src="/austin-neighborhood-map-with-streets-and-landmarks.png"
            alt="Neighborhood Map"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
