"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input"; // Assuming Shadcn/UI Input component
import { cn } from "@/lib/utils"; // Utility for className concatenation, common in Shadcn/UI

interface Location {
  value: string;
  label: string;
}

interface LocationSearchInputProps {
  onLocationSelect: (value: string) => void;
  className?: string;
}

const locations: Location[] = [
  { value: "austin", label: "Austin" },
  { value: "los-angeles", label: "Los Angeles" },
  { value: "new-york", label: "New York" },
];

export default function LocationSearchInput({
  onLocationSelect,
  className,
}: LocationSearchInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredLocations, setFilteredLocations] =
    useState<Location[]>(locations);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter locations based on input
  useEffect(() => {
    if (inputValue) {
      setFilteredLocations(
        locations.filter((loc) =>
          loc.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    } else {
      setFilteredLocations(locations);
    }
  }, [inputValue]);

  const handleSelect = (location: Location) => {
    setInputValue(location.label);
    onLocationSelect(location.value);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)} ref={wrapperRef}>
      <Input
        type="text"
        placeholder="Search for a location..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        className="w-full"
      />
      {isOpen && filteredLocations.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredLocations.map((location) => (
            <li
              key={location.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(location)}
            >
              {location.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
