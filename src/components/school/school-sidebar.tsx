import { Card, CardContent } from "@/components/ui/card";
import { MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import school_img from '@/assets/property/school.png';
import Link from "next/link";

const schools = [
  {
    id: 1,
    name: "Maranatha Christian School",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    address: "4517 Washington Ave, Kentucky, 39495",
    students: 120,
    gradeLevel: "Middle",
    schoolType: "Public",
    image:school_img.src
  },
  {
    id: 2,
    name: "Maranatha Christian School",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    address: "4517 Washington Ave, Kentucky, 39495",
    students: 120,
    gradeLevel: "Middle",
    schoolType: "Public",
    image:school_img.src
  },
  {
    id: 3,
    name: "Maranatha Christian School",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    address: "4517 Washington Ave, Kentucky, 39495",
    students: 120,
    gradeLevel: "Middle",
    schoolType: "Public",
    image:school_img.src
  }

];

export default function SchoolSidebar() {
  return (
    <div className="h-full bg-white border-l border-gray-200 overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Schools</h2>
        <Button variant="ghost" size="sm">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* School listings */}
      <div className="p-4 space-y-4">
        {schools.map((school) => (
          <Link
            key={school.id}
            href={`/schools/${school.id}`}
            className="flex items-center justify-between"
          >
            <Card
              key={school.id}
              className="overflow-hidden
            grid grid-cols-5
            hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="relative  col-span-2">
                <Image
                  src={school.image || "/placeholder.svg"}
                  alt={school.name}
                  width={1000}
                  height={1000}
                  className="object-cover bg-green-400"
                />
              </div>
              <CardContent className=" col-span-3">
                <h3 className="font-semibold text-2xl text-blue-600 mb-2">
                  {school.name}
                </h3>
                <p className="text-base font-normal text-gray-600 mb-3 line-clamp-2">
                  {school.description}
                </p>

                <div className="flex items-center text-base font-normal text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{school.address}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className=" text-base font-normal">Students</div>
                    <div className="text-base font-normal text-[#7B7B7B] leading-6">
                      {school.students}
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-normal">Grade Level</div>
                    <div className="text-base font-normal text-[#7B7B7B] leading-6">
                      {school.gradeLevel}
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-normal">School Type</div>
                    <div className="text-base font-normal text-[#7B7B7B] leading-6">
                      {school.schoolType}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
