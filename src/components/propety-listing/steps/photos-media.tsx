"use client";

import type React from "react";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FormData } from "@/components/propety-listing/stepper-form";
import { useRef } from "react";

interface PhotosMediaProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function PhotosMedia({ formData, updateFormData }: PhotosMediaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      updateFormData({ photos: [...formData.photos, ...fileArray] });
      console.log(
        "Photos selected:",
        fileArray.map((f) => ({ name: f.name, size: f.size, type: f.type }))
      );
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      const fileArray = Array.from(files);
      updateFormData({ photos: [...formData.photos, ...fileArray] });
      console.log(
        "Photos dropped:",
        fileArray.map((f) => ({ name: f.name, size: f.size, type: f.type }))
      );
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Photos & Media
        </h2>
        <p className="text-gray-600">
          Upload high-quality photos and add virtual tours to attract buyers.
        </p>
      </div>

      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-orange-500 transition-colors"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
            <Upload className="w-8 h-8 text-orange-500" />
          </div>
          <Button
            type="button"
            onClick={handleButtonClick}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Add photos & Videos
          </Button>
          <p className="text-gray-500">or drop files here</p>
          <p className="text-sm text-gray-400">
            Maximum file size is 10MB & Number of File 10
          </p>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      </div>

      {/* Display selected files */}
      {formData.photos.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-medium mb-4">
            Selected Files ({formData.photos.length})
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {formData.photos.map((file, index) => (
              <div key={index} className="border rounded-lg p-3">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
