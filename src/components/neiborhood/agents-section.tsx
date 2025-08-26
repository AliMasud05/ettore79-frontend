import { Star, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export function AgentsSection() {
  const agents = [
    {
      name: "Olivia Rhye",
      company: "Americorp Real Estate",
      experience: "4 years",
      specialties: ["Market Knowledge"],
      rating: 4.9,
      reviews: 127,
      image: "/placeholder-yjtgj.png",
    },
    {
      name: "Olivia Rhye",
      company: "Americorp Real Estate",
      experience: "3 years",
      specialties: ["Property Valuation"],
      rating: 4.9,
      reviews: 127,
      image: "/placeholder-vo3qg.png",
    },
    {
      name: "Olivia Rhye",
      company: "Americorp Real Estate",
      experience: "5 years",
      specialties: ["Marketing Strategies"],
      rating: 4.8,
      reviews: 127,
      image: "/professional-male-real-estate-agent-headshot-smili.png",
    },
    {
      name: "Olivia Rhye",
      company: "Americorp Real Estate",
      experience: "2 years",
      specialties: ["First-time Buyers"],
      rating: 4.8,
      reviews: 127,
      image: "/placeholder-ay8pd.png",
    },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-2">
        Agents And Landlords Specializing in Attendance Zone
      </h2>

      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-orange-100 text-orange-600 rounded-lg text-sm font-medium">
          Agents
        </button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
          Landlords
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border overflow-hidden"
          >
            <Image
            width={1000}
            height={1000}
              src={agent.image || "/placeholder.svg"}
              alt={agent.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{agent.rating}</span>
                <span className="text-xs text-gray-500">
                  ({agent.reviews} reviews)
                </span>
              </div>

              <h3 className="font-semibold mb-1">{agent.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{agent.company}</p>
              <p className="text-xs text-gray-500 mb-2">
                Years of experience: {agent.experience}
                <br />
                Specialties: {agent.specialties.join(", ")}
              </p>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-xs font-medium flex items-center justify-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  Chat
                </button>
                <button className="flex-1 border border-gray-300 py-2 px-3 rounded text-xs font-medium flex items-center justify-center gap-1">
                  <Phone className="w-3 h-3" />
                  Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
