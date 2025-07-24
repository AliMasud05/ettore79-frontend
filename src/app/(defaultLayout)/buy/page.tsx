import PropertyCard from '@/components/property/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Search } from 'lucide-react';

const Page = () => {
  return (
    <div>
      {/* Search Bar */}
      <div className="border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <Input
                placeholder="Address, neighborhood, city, ZIP "
                className="w-full px-4 py-5  border border-gray-300 rounded-lg"
              />
            </div>
            <Select defaultValue="for-sale">
              <SelectTrigger className="w-32 py-5">
                <SelectValue placeholder="For Sale" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-base" value="for-sale">
                  <span className="text-gray-500">For Sale</span>
                </SelectItem>
                <SelectItem className="text-base" value="for-rent">
                  <span className="text-gray-500">For Rent</span>
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-24 py-5">
                <SelectValue className='placeholder:text-base' placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any"><span className="text-base">Any</span></SelectItem>
                <SelectItem value="100k"><span className="text-base">$100K+</span></SelectItem>
                <SelectItem value="200k"><span className="text-base">$200K+</span></SelectItem>
                <SelectItem value="100k"> <span className="text-base">$100K+</span></SelectItem>
                <SelectItem value="200k"> <span className="text-base">$200K+</span></SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32 py-5">
                <SelectValue placeholder="Beds & Baths" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1+">1+</SelectItem>
                <SelectItem value="2+">2+</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32 py-5">
                <SelectValue placeholder="Property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-5">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-140px)]">
        {/* Map Section */}
        <div className="w-1/2 relative">
          <div className="w-full h-full bg-gray-100 relative overflow-hidden">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
              {/* Map-like grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" className="text-gray-400">
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Simulated streets and areas */}
              <div className="absolute top-20 left-10 text-sm text-gray-600 font-medium">
                Tashkent Supermarket
              </div>
              <div className="absolute top-32 left-12 text-xs text-gray-500">
                Halal Food - Ave Z
              </div>
              <div className="absolute bottom-40 left-8 text-sm text-gray-600 font-medium">
                CONEY ISLAND
              </div>
              <div className="absolute bottom-20 right-20 text-sm text-gray-600 font-medium">
                BRIGHTON BEACH
              </div>
              <div className="absolute top-1/2 left-4 text-xs text-gray-500">
                New York State DMV
              </div>
              <div className="absolute top-1/2 left-4 mt-4 text-xs text-gray-500">
                Brooklyn (Coney Island)
              </div>

              {/* Map pins */}
              <div className="absolute top-24 left-32 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div className="absolute top-40 right-32 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <div className="absolute bottom-32 left-24 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
                <span className="text-lg font-bold">+</span>
              </button>
              <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
                <span className="text-lg font-bold">-</span>
              </button>
            </div>

            <button className="absolute top-4 left-4 w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <span className="text-lg">×</span>
            </button>
          </div>
        </div>

        {/* Listings Section */}
        <div className="w-1/2 overflow-y-auto bg-white">
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-4xl secondary-font font-bold text-blue-600 mb-2">
                Mexico Flintridge Real Estate & Homes For Buy
              </h1>
              <p className="text-gray-600">6 Results</p>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Modern house"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">4.5</span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                      Serenity at Whispering Pines Retreat
                    </h3>

                    <p className="text-orange-500 font-bold text-lg mb-2">
                      $120
                    </p>

                    <p className="text-xs text-gray-600 mb-3">
                      3691 Beachview Dr, Richardson, California
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Bed className="w-3 h-3" />
                        <span>5 bedrooms</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="w-3 h-3" />
                        <span>6 baths</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>6 Guests</span>
                      </div>
                    </div>
                  </div> */}
                  <PropertyCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page