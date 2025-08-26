import { Star } from "lucide-react";

export function SchoolsSection() {
  const schoolTypes = ["Preschool", "Elementary", "Middle", "High"];

  const schools = [
    {
      name: "Gardner Elementary School",
      type: "Elementary",
      rating: 10,
      students: 244,
      grades: "K-5",
      isPublic: true,
      district: "San Jose Unified School District",
      parentRating: 4.5,
      greatSchoolRating: 10,
    },
    // Repeat for other schools...
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Schools</h2>

      {/* School Type Tabs */}
      <div className="flex gap-2 mb-6">
        {schoolTypes.map((type, index) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              index === 1
                ? "bg-orange-100 text-orange-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Schools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg border p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-sm">
                  Gardner Elementary School
                </h3>
                <p className="text-xs text-gray-500">
                  K-5 • Public • 244 Students
                </p>
                <p className="text-xs text-gray-500">
                  San Jose Unified School District
                </p>
              </div>
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                10
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <span>Parent Rating</span>
              </div>
              <div>
                <span className="font-medium">GreatSchool Rating</span>
              </div>
            </div>

            <p className="text-xs text-gray-600 mb-3">
              My son attended kindergarten and first grade at Gardner and I felt
              like he was challenged and engaged in his learning.
            </p>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <span className="text-xs font-medium">Parent Review</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
