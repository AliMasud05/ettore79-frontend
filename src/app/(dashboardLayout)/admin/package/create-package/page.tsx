"use client";
import React, { useEffect, useState } from "react";
import {
  useCreatePackageMutation,
  useGetPackageByIdQuery,
  useUpdatePackageMutation,
} from "@/redux/api/packageApi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Trash2, Plus } from "lucide-react";

const CreatePackagePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const packageId = searchParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    maxListings: 0,
    price: 0,
    description: [""], // Initialize with one empty description
  });

  const { data: packageData, isLoading: isFetching } = useGetPackageByIdQuery(
    packageId,
    {
      skip: !packageId,
    }
  );

  const [createPackage, { isLoading: isCreating }] = useCreatePackageMutation();
  const [updatePackage, { isLoading: isUpdating }] = useUpdatePackageMutation();

  useEffect(() => {
    if (packageData?.data && packageId) {
      setFormData({
        name: packageData.data.name,
        maxListings: packageData.data.maxListings,
        price: packageData.data.price,
        description: Array.isArray(packageData.data.description)
          ? packageData.data.description.length > 0
            ? packageData.data.description
            : [""]
          : [packageData.data.description || ""], // Fallback for single string or null
      });
    }
  }, [packageData, packageId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (name === "description" && index !== undefined) {
      const updatedDescriptions = [...formData.description];
      updatedDescriptions[index] = value;
      setFormData((prev) => ({ ...prev, description: updatedDescriptions }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]:
          name === "maxListings" || name === "price" ? Number(value) : value,
      }));
    }
  };

  const addDescription = () => {
    setFormData((prev) => ({
      ...prev,
      description: [...prev.description, ""],
    }));
  };

  const removeDescription = (index: number) => {
    if (formData.description.length > 1) {
      setFormData((prev) => ({
        ...prev,
        description: prev.description.filter((_, i) => i !== index),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Filter out empty descriptions
    const cleanedFormData = {
      ...formData,
      description: formData.description.filter((desc) => desc.trim() !== ""),
    };
    try {
      if (packageId) {
        // Pass id and data separately as required by the updatePackage mutation
        await updatePackage({ id: packageId, data: cleanedFormData }).unwrap();
        alert("Package updated successfully");
      } else {
        await createPackage(cleanedFormData).unwrap();
        alert("Package created successfully");
      }
      router.push("/admin/package");
    } catch (error: any) {
      alert(
        `Failed to ${packageId ? "update" : "create"} package, error: ${
          error?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {packageId ? "Update Package" : "Create Package"}
      </h1>
      {isFetching ? (
        <p className="text-gray-500">Loading package data...</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Package Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter package name"
              className="mt-1"
              required
            />
          </div>
          <div>
            <label
              htmlFor="maxListings"
              className="block text-sm font-medium text-gray-700"
            >
              Max Listings
            </label>
            <Input
              id="maxListings"
              name="maxListings"
              type="number"
              value={formData.maxListings}
              onChange={handleChange}
              placeholder="Enter max listings"
              className="mt-1"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descriptions
            </label>
            {formData.description.map((desc, index) => (
              <div key={index} className="flex items-center gap-2 mt-1">
                <Input
                  name="description"
                  value={desc}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`Enter description ${index + 1}`}
                  className="flex-1"
                  required={index === 0} // Only the first description is required
                />
                {formData.description.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeDescription(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addDescription}
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Description
            </Button>
          </div>
          <div className="flex gap-4">
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700"
              disabled={isCreating || isUpdating}
            >
              {isCreating || isUpdating
                ? packageId
                  ? "Updating..."
                  : "Creating..."
                : packageId
                ? "Update Package"
                : "Create Package"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/package")}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreatePackagePage;
