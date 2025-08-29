"use client";

import { useState } from "react";

export default function MapView() {
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  // Mock school locations
  const schools = [
    { id: 1, name: "Maranatha Christian School", x: 45, y: 60 },
    { id: 2, name: "School Location 2", x: 55, y: 40 },
    { id: 3, name: "School Location 3", x: 35, y: 75 },
  ];

  return (
    <div className="h-full relative bg-green-50">
      {/* Mock map background with streets pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="streets"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
            >
              <rect width="40" height="40" fill="#e5e7eb" />
              <rect width="2" height="40" fill="#d1d5db" />
              <rect width="40" height="2" fill="#d1d5db" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#streets)" />
        </svg>
      </div>

      {/* Mock geographic features */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-blue-100 opacity-30"></div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-green-200 opacity-40 rounded-l-full"></div>

      {/* Location labels */}
      <div className="absolute top-8 left-8 text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded shadow-sm">
        Marlboro Projects
      </div>
      <div className="absolute top-1/3 left-1/4 text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded shadow-sm">
        Tashkent Supermarket - Halal Food - Ave Z
      </div>
      <div className="absolute bottom-1/3 left-8 text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded shadow-sm">
        CONEY ISLAND
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded shadow-sm">
        BRIGHTON BEACH
      </div>
      <div className="absolute bottom-8 left-8 text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded shadow-sm">
        New York State DMV Brooklyn (Coney Island)
      </div>

      {/* School markers */}
      {schools.map((school) => (
        <div
          key={school.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ left: `${school.x}%`, top: `${school.y}%` }}
          onClick={() =>
            setSelectedMarker(selectedMarker === school.id ? null : school.id)
          }
        >
          <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          {selectedMarker === school.id && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg border min-w-max">
              <div className="text-sm font-medium">{school.name}</div>
              <div className="w-3 h-3 bg-white transform rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b"></div>
            </div>
          )}
        </div>
      ))}

      {/* Map controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
        <button className="bg-white border border-gray-300 rounded p-2 shadow-sm hover:bg-gray-50 w-8 h-8 flex items-center justify-center">
          <span className="text-lg font-bold leading-none">+</span>
        </button>
        <button className="bg-white border border-gray-300 rounded p-2 shadow-sm hover:bg-gray-50 w-8 h-8 flex items-center justify-center">
          <span className="text-lg font-bold leading-none">−</span>
        </button>
      </div>

      {/* Attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white bg-opacity-75 px-1 rounded">
        Map placeholder - Leaflet integration pending
      </div>
    </div>
  );
}
