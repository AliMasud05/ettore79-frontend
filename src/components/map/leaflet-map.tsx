/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import L, { DivIcon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import * as React from "react";
import { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Select } from "../ui/select";

// Fix default marker icon for leaflet in Next.js
if (typeof window !== "undefined" && L && L.Icon.Default) {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  type: string;
}

interface MapComponentProps {
  activeCategory: string;
  location: string;
}

const locations = [
  { value: "cafe", label: "Cafe" },
  { value: "restaurant", label: "Restaurant" },
  { value: "school", label: "School" },
  { value: "shopping", label: "Shopping" },
  { value: "fitness", label: "Fitness" },
  { value: "others", label: "Others" },
];

// const categories = [
//   { value: "Highlights", label: "Highlights" },
//   { value: "Restaurants", label: "Restaurants" },
//   { value: "Groceries", label: "Groceries" },
//   { value: "Nightlife", label: "Nightlife" },
//   { value: "Cafes", label: "Cafes" },
//   { value: "Shopping", label: "Shopping" },
//   { value: "Arts and Entertainment", label: "Arts and Entertainment" },
//   { value: "Fitness", label: "Fitness" },
// ];

function getMarkersForCategory(
  category: string,
  location: string
): MarkerData[] {
  const baseMarkers: { [key: string]: MarkerData[] } = {
    Highlights: [
      { lat: 30.2672, lng: -97.7431, name: "Zilker Park", type: "Park" },
      {
        lat: 30.2649,
        lng: -97.7341,
        name: "Austin City Limits",
        type: "Venue",
      },
      {
        lat: 30.2711,
        lng: -97.7437,
        name: "Barton Springs Pool",
        type: "Recreation",
      },
    ],
    Restaurants: [
      {
        lat: 30.2668,
        lng: -97.7425,
        name: "Uchi",
        type: "Japanese Restaurant",
      },
      { lat: 30.2675, lng: -97.7445, name: "Franklin Barbecue", type: "BBQ" },
      { lat: 30.2655, lng: -97.7415, name: "La Barbecue", type: "BBQ" },
    ],
    Groceries: [
      {
        lat: 30.2685,
        lng: -97.7455,
        name: "Whole Foods Market",
        type: "Grocery Store",
      },
      {
        lat: 30.2645,
        lng: -97.7395,
        name: "Central Market",
        type: "Grocery Store",
      },
    ],
    Nightlife: [
      {
        lat: 30.2665,
        lng: -97.7435,
        name: "The Continental Club",
        type: "Music Venue",
      },
      {
        lat: 30.2678,
        lng: -97.7448,
        name: "Antone's Nightclub",
        type: "Live Music",
      },
    ],
    Cafes: [
      {
        lat: 30.2662,
        lng: -97.7422,
        name: "Radio Coffee",
        type: "Coffee Shop",
      },
      {
        lat: 30.2681,
        lng: -97.7441,
        name: "Sightglass Coffee",
        type: "Coffee Shop",
      },
    ],
    Shopping: [
      {
        lat: 30.2671,
        lng: -97.7428,
        name: "South First Shopping",
        type: "Shopping District",
      },
      {
        lat: 30.2658,
        lng: -97.7418,
        name: "Austin Vintage",
        type: "Vintage Store",
      },
    ],
    "Arts and Entertainment": [
      {
        lat: 30.2674,
        lng: -97.7434,
        name: "The Paramount Theatre",
        type: "Theater",
      },
      {
        lat: 30.2667,
        lng: -97.7427,
        name: "Blanton Museum",
        type: "Art Museum",
      },
    ],
    Fitness: [
      {
        lat: 30.2679,
        lng: -97.7439,
        name: "Austin Rock Gym",
        type: "Climbing Gym",
      },
      {
        lat: 30.2663,
        lng: -97.7423,
        name: "Barry's Bootcamp",
        type: "Fitness Studio",
      },
    ],
  };

  // Adjust markers based on location
  const locationAdjustments: {
    [key: string]: { latOffset: number; lngOffset: number };
  } = {
    cafe: { latOffset: 0.002, lngOffset: 0.002 },
    restaurant: { latOffset: 0.004, lngOffset: 0.004 },
    school: { latOffset: 0.006, lngOffset: 0.006 },
    shopping: { latOffset: 0.008, lngOffset: 0.008 },
    fitness: { latOffset: 0.01, lngOffset: 0.01 },
    others: { latOffset: 0.012, lngOffset: 0.012 },
  };

  const markers = baseMarkers[category] || baseMarkers.Highlights;
  const adjustment = locationAdjustments[location] || {
    latOffset: 0,
    lngOffset: 0,
  };

  return markers.map((marker) => ({
    ...marker,
    lat: marker.lat + adjustment.latOffset,
    lng: marker.lng + adjustment.lngOffset,
  }));
}

function useGroupedMarkers(markers: MarkerData[]) {
  return React.useMemo(() => {
    const grouped: { [key: string]: MarkerData[] } = {};
    markers.forEach((marker) => {
      const key = `${marker.lat},${marker.lng}`;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(marker);
    });
    return grouped;
  }, [markers]);
}

export function LeafletMap({ activeCategory, location }: MapComponentProps) {
  const [popupIndices, setPopupIndices] = useState<Record<string, number>>({});
  const markerRefs = useRef<Record<string, any>>({});

  const markers = getMarkersForCategory(activeCategory, location);
  const grouped = useGroupedMarkers(markers);
  const markerKeys = Object.keys(grouped);

  const center: LatLngExpression =
    markerKeys.length > 0
      ? (markerKeys[0].split(",").map(Number) as [number, number])
      : [30.2672, -97.7431];

  const circleIcon: DivIcon = L.divIcon({
    className: "",
    html: `<div style="width:32px;height:32px;background:#f97316;border-radius:50%;box-shadow:0 2px 8px #0002;display:flex;align-items:center;justify-content:center;border:3px solid #fff;"></div>`,
  });

  const handleMarkerClick = (key: string) => {
    setPopupIndices((idx) => ({ ...idx, [key]: 0 }));
    setTimeout(() => {
      const ref = markerRefs.current[key];
      if (ref && ref.openPopup) ref.openPopup();
    }, 0);
  };

  const handlePrev = (key: string, groupLen: number) => {
    setPopupIndices((idx) => ({
      ...idx,
      [key]: ((idx[key] ?? 0) - 1 + groupLen) % groupLen,
    }));
  };

  const handleNext = (key: string, groupLen: number) => {
    setPopupIndices((idx) => ({
      ...idx,
      [key]: ((idx[key] ?? 0) + 1) % groupLen,
    }));
  };

  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markerKeys.map((key) => {
        const group = grouped[key];
        const [lat, lng] = key.split(",").map(Number);
        const markerId = `${lat},${lng}`;
        const popupIdx = popupIndices[key] ?? 0;
        return (
          <Marker
            key={markerId}
            position={[lat, lng] as [number, number]}
            icon={circleIcon}
            eventHandlers={{
              click: () => handleMarkerClick(key),
            }}
            ref={(ref) => {
              markerRefs.current[key] = ref;
            }}
          >
            <Popup position={[lat, lng] as [number, number]} autoPan={true}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  minWidth: 160,
                  maxWidth: 200,
                }}
              >
                {group.length > 1 && (
                  <button
                    aria-label="Previous marker"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev(key, group.length);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 18,
                      padding: 4,
                    }}
                  >
                    &#8592;
                  </button>
                )}
                <div style={{ flex: 1 }}>
                  <div>
                    <b>{group[popupIdx].name}</b>
                    <br />
                    {group[popupIdx].type}
                  </div>
                </div>
                {group.length > 1 && (
                  <button
                    aria-label="Next marker"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(key, group.length);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 18,
                      padding: 4,
                    }}
                  >
                    &#8594;
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export function ExploreArea() {
  const [activeCategory, setActiveCategory] = useState("Highlights");
  const [location, setLocation] = useState("cafe");

  return (
    <div className=" mx-auto   py-8 relative z-30">

      {/* Filter Bar */}
      <div className="md:flex items-center bg-white rounded-lg p-2 gap-2 relative z-40  flex-wrap">
        <div className=" w-full ">
          <Select value={activeCategory} onValueChange={setActiveCategory} />
        </div>
        <div className="flex-1 border border-gray-100 md:border-0">
          <div className="flex gap-2 flex-wrap">
            {locations.map((loc) => (
              <button
                key={loc.value}
                onClick={() => setLocation(loc.value)}
                className={`px-4 py-2 rounded-lg text-base font-medium ${
                  location === loc.value
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className="rounded-2xl overflow-hidden bg-white relative z-20 pt-20"
        style={{ height: 400, marginTop: "-2rem" }}
      >
        <LeafletMap activeCategory={activeCategory} location={location} />
      </div>
    </div>
  );
}

export default ExploreArea;
