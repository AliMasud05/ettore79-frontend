/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  useDeletePackageMutation,
  useGetPackagesQuery,
} from "@/redux/api/packageApi";

const PackagePage = () => {
  const { data: packageResponse, isLoading, isError } = useGetPackagesQuery({});
  const [deletePackage] = useDeletePackageMutation();
  const router = useRouter();

  const packages = packageResponse?.data?.data || [];

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this package?")) {
      try {
        await deletePackage(id).unwrap();
        alert("Package deleted successfully");
      } catch (error) {
        alert("Failed to delete package " + error);
      }
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/package/create-package?id=${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 ">All Packages</h1>
        <div className="mt-6">
          <Button
            onClick={() => router.push("/admin/package/create-package")}
            className="bg-blue-600 text-white  hover:bg-blue-700 py-5"
          >
            Create New Package
          </Button>
        </div>
      </div>
      {isLoading ? (
        <p className="text-gray-500">Loading packages...</p>
      ) : isError ? (
        <p className="text-red-500">
          Error fetching packages. Please try again later.
        </p>
      ) : packages.length === 0 ? (
        <p className="text-gray-500">No packages found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Name
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Max Listings
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Price
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Description
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Currency
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg: any) => (
                <tr key={pkg.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{pkg.name}</td>
                  <td className="py-3 px-4">{pkg.maxListings}</td>
                  <td className="py-3 px-4">{pkg.price}</td>
                  <td className="py-3 px-4">{pkg.description}</td>
                  <td className="py-3 px-4">{pkg.currency}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(pkg.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(pkg.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PackagePage;
