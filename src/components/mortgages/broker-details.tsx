"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import profile from "@/assets/agent/Image (8).png";

interface BrokerDetailsProps {
  brokerId: string;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export function BrokerDetailsPage({ brokerId }: BrokerDetailsProps) {
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);

  // Mock broker data
  const broker = {
    id: brokerId,
    name: "Carlos Mendoza",
    company: "MortgagePro Mexico",
    rating: 4.9,
    reviews: 156,
    experience: 12,
    location: "Ciudad de Mexico",
    specialties: ["First-time buyers", "Investment properties", "Refinancing"],
    avatar: "/placeholder.svg?height=100&width=100&text=Carlos",
    verified: true,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stats: {
      loansClosed: 450,
      averageRate: "8.2%",
      minLoanAmount: "$0.5M",
      maxLoanAmount: "$15.0M",
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: "Alexa Johnson",
      rating: 5,
      comment:
        "Mothly helped me find someone to cook a few meals when I was overwhelmed. The support felt real. I'm so grateful for this platform!",
      avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    },
  ];

  const handleSubmitReview = () => {
    if (newReview.trim() && newRating > 0) {
      console.log("New review submitted:", {
        rating: newRating,
        comment: newReview,
        brokerId: brokerId,
      });
      setNewReview("");
      setNewRating(0);
      alert("Review submitted successfully!");
    }
  };

  const renderStars = (
    rating: number,
    interactive = false,
    onRate?: (rating: number) => void
  ) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side - Broker Details */}
            <div className="lg:col-span-2">
              {/* Broker Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative w-24 h-24">
                  <Image
                    src={profile.src}
                    alt={broker.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {broker.name}
                    </h1>
                    {broker.verified && (
                      <span className="text-blue-500">✓</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{broker.company}</p>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      {renderStars(Math.floor(broker.rating))}
                      <span className="font-medium">{broker.rating}</span>
                      <span className="text-gray-600">({broker.reviews})</span>
                    </div>
                    <span className="text-gray-600">
                      {broker.experience} years
                    </span>
                  </div>
                  <p className="text-gray-600">📍 {broker.location}</p>
                </div>
              </div>

              {/* About Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About {broker.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">{broker.about}</p>
              </section>

              {/* Key Statistics and Specialties */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Statistics
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loans Closed:</span>
                      <span className="font-semibold">
                        {broker.stats.loansClosed}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average Rate:</span>
                      <span className="font-semibold">
                        {broker.stats.averageRate}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Min Loan Amount:</span>
                      <span className="font-semibold">
                        {broker.stats.minLoanAmount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max Loan Amount:</span>
                      <span className="font-semibold">
                        {broker.stats.maxLoanAmount}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Specialties
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {broker.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  What User Are Saying
                </h3>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="flex items-start gap-4">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{review.name}</h4>
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Add Review Section */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Add your Review
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Rating
                    </label>
                    {renderStars(newRating, true, setNewRating)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Review
                    </label>
                    <Textarea
                      placeholder="Enter Your Review"
                      value={newReview}
                      onChange={(e) => setNewReview(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button
                    onClick={handleSubmitReview}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                  >
                    Submit
                  </Button>
                </div>
              </section>
            </div>

            {/* Right Side - Contact Section */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Brokers
                </h2>
                <div className="space-y-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                    View Bank Details
                  </Button>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 flex items-center justify-center gap-2">
                    <span>📱</span>
                    WhatsApp
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
