import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import PropertyCard from "@/components/property/PropertyCard";
import profile from '@/assets/agent/Image (8).png'
import mapImage from '@/assets/map/map2.png'

export default function AgentDetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
          {/* Agent Profile */}
          <div className=" p-6 mb-8 col-span-2 max-h-72 mt-0 md:mt-20">
            <div className="text-center mb-6">
              <div className="w-30 h-30 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <Image
                  src={profile.src}
                  alt="Olivia Rhye"
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </div>
              <h2 className="text-4xl font-normal text-[#3012F0] mb-1">
                Olivia Rhye
              </h2>
              <div className="flex items-center justify-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm ml-1">4.9 (127 reviews)</span>
              </div>
              <div className="text-base text-gray-600 space-y-1">
                <p>$13K-$3.8M price range</p>
                <p>526 Sales last 12 months</p>
              </div>
            </div>
          </div>
          <div className="mb-8 col-span-7">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-purple-700">
                Recent Sales
              </h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <PropertyCard key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Recent Sales Section */}

            {/* Description */}
            <div className="mb-8 border-1 border-gray-300 rounded-lg p-3">
              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Location Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Location Information</h3>
              <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={mapImage.src}
                  alt="Map"
                  width={800}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Reviews */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">What User Are Saying</h3>
              <div className="p-4 mb-4">
                <div className="flex items-center mb-2">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                    <Image
                      src={profile.src}
                      alt="Agent"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>{" "}
                  <div>
                    <p className="font-medium">Alexa Johnson</p>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-orange-500 fill-orange-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Molthy helped me find someone to cook a few meals when I was
                  overwhelmed. The support felt real. I&lsquo;m so grateful for
                  this platform!
                </p>
              </div>

              <div className="p-4">
                <h4 className="font-semibold mb-4">Add your Review</h4>

                <div className="mb-4">
                  <p className="mb-2">Your Rating</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-gray-300 cursor-pointer hover:text-orange-500"
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="mb-2">Your Review</p>
                  <Textarea placeholder="Enter Your Review" className="h-24" />
                </div>

                <Button className="bg-orange-500 hover:bg-orange-600">
                  Submit
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            <div className=" p-6 mb-8">
              <h3 className="text-lg font-bold mb-4">Contact Agent</h3>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First name
                    </label>
                    <Input placeholder="First name" className="py-6 " />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last name
                    </label>
                    <Input placeholder="Last name" className="py-6 " />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    className="py-6 "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number
                  </label>
                  <div className="flex">
                    <select className="border rounded-l-md px-3 py-2 bg-white text-sm w-16">
                      <option>US</option>
                      <option>MX</option>
                      <option>CA</option>
                    </select>
                    <Input
                      placeholder="+1 (555) 000-0000"
                      className="rounded-l-none py-6"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea className="h-24" />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="privacy" className="mr-2" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    You agree to our friendly privacy policy.
                  </label>
                </div>

                <Button className="w-full  bg-orange-500 hover:bg-orange-600 py-6">
                  Send message
                </Button>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center
                    py-6
                    gap-2 bg-transparent"
                  >
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    Whatsapp
                  </Button>
                </div>
              </form>
            </div>

            {/* Similar Agent */}
            <div>
              <h3 className="text-lg font-bold mb-4">Similar Agent</h3>

              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 border rounded-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src={profile.src}
                        alt="Agent"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Olivia Rhye</h4>
                      <p className="text-sm text-purple-600">
                        Americorp Real Estate
                      </p>
                      <p className="text-xs text-gray-500">
                        $13K-$3.8M price range • 526 Sales last 12 months
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <Button variant="link" className="text-purple-600">
                  View More Similar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
