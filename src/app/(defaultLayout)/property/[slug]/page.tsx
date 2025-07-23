import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Star,
  MapPin,
  Bed,
  Bath,
  Users,
  Home,
  Dumbbell,
  Flower,
  Wifi,
  Shield,
} from "lucide-react";

export default function PropertyDetailPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-purple-700 mb-1">
            Modern House in Polanco
          </h1>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>
              Av. Presidente Masaryk 123, Polanco, Miguel Hidalgo, 11560 Ciudad
              de México, CDMX
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            <Heart className="h-5 w-5" />
            Save
          </Button>

          <div>
            <Badge className="bg-orange-500">For Sale</Badge>
            <div className="text-2xl font-bold mt-1">$8.5M</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="relative mb-4 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Modern House in Polanco"
              width={800}
              height={500}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/placeholder.svg?height=100&width=150"
                alt={`Property image ${index + 1}`}
                width={150}
                height={100}
                className="rounded-md h-20 w-28 object-cover"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <Bed className="h-6 w-6 text-orange-500 mb-2" />
              <span className="text-xl font-bold">4</span>
              <span className="text-sm text-gray-500">Bedrooms</span>
            </div>

            <div className="flex flex-col items-center p-4 border rounded-lg">
              <Bath className="h-6 w-6 text-orange-500 mb-2" />
              <span className="text-xl font-bold">3</span>
              <span className="text-sm text-gray-500">Bathrooms</span>
            </div>

            <div className="flex flex-col items-center p-4 border rounded-lg">
              <Home className="h-6 w-6 text-orange-500 mb-2" />
              <span className="text-xl font-bold">350</span>
              <span className="text-sm text-gray-500">sqm built</span>
            </div>

            <div className="flex flex-col items-center p-4 border rounded-lg">
              <Users className="h-6 w-6 text-orange-500 mb-2" />
              <span className="text-xl font-bold">2</span>
              <span className="text-sm text-gray-500">Parking</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
            <div className="flex flex-col p-4 border rounded-lg">
              <span className="text-gray-500">Lot Size</span>
              <span className="font-bold">500 m²</span>
            </div>

            <div className="flex flex-col p-4 border rounded-lg">
              <span className="text-gray-500">Year Built</span>
              <span className="font-bold">2020</span>
            </div>

            <div className="flex flex-col p-4 border rounded-lg">
              <span className="text-gray-500">Type</span>
              <span className="font-bold">Casa</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              Beautiful modern house with luxury finishes in the exclusive
              Polanco area. This property features spacious areas, contemporary
              design and the best amenities. Perfect for families seeking
              comfort and elegance in one of the city's best locations.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-orange-500" />
                <span>2 Parking Spaces</span>
              </div>

              <div className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-orange-500" />
                <span>Gym</span>
              </div>

              <div className="flex items-center gap-2">
                <Flower className="h-5 w-5 text-orange-500" />
                <span>Private Garden</span>
              </div>

              <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-orange-500" />
                <span>High-Speed Internet</span>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-500" />
                <span>24/7 Security</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Location Information</h2>
            <Tabs defaultValue="map">
              <TabsList className="mb-4">
                <TabsTrigger value="map">Map</TabsTrigger>
                <TabsTrigger value="schools">Schools</TabsTrigger>
              </TabsList>

              <TabsContent value="map">
                <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    alt="Map"
                    width={800}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </TabsContent>

              <TabsContent value="schools">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold">Colegio Americano</h3>
                    <p className="text-sm text-gray-600">Distance: 0.5 miles</p>
                    <p className="text-sm text-gray-600">Rating: 4.8/5</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold">Liceo Franco Mexicano</h3>
                    <p className="text-sm text-gray-600">Distance: 0.8 miles</p>
                    <p className="text-sm text-gray-600">Rating: 4.6/5</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">What User Are Saying</h2>
            <div className="p-4 border rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
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
                overwhelmed. The support felt real. I'm so grateful for this
                platform!
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Add your Review</h3>

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

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Agent"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Maria González</h3>
                <p className="text-sm text-gray-600">
                  Certified Real Estate Agent
                </p>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-orange-500 fill-orange-500" />
                  <span className="text-xs ml-1">4.9 (27 reviews)</span>
                </div>
                <p className="text-xs text-gray-600">8 years of experience</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input placeholder="First name" />
                </div>
                <div>
                  <Input placeholder="Last name" />
                </div>
              </div>

              <div>
                <Input type="email" placeholder="you@company.com" />
              </div>

              <div className="flex">
                <select className="border rounded-l-md px-3 py-2 bg-white text-sm w-16">
                  <option>US</option>
                  <option>MX</option>
                  <option>CA</option>
                </select>
                <Input
                  placeholder="+1 (555) 000-0000"
                  className="rounded-l-none"
                />
              </div>

              <div>
                <Textarea placeholder="Message" className="h-24" />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="privacy" className="mr-2" />
                <label htmlFor="privacy" className="text-xs text-gray-600">
                  You agree to our friendly privacy policy
                </label>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Send message
              </Button>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 bg-transparent"
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

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Similar Properties</h3>

            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden flex"
                >
                  <div className="w-1/3">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Similar property"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-3">
                    <h4 className="font-medium text-sm">Casa en Polanco</h4>
                    <p className="text-orange-500 font-bold">$2.7M</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-2">Beds: 3</span>
                      <span>Baths: 2</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <Button variant="link" className="text-orange-500">
                View More Similar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
