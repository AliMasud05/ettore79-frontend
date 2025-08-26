import { NeighborhoodsGrid } from '@/components/neiborhood/neighborhoods-grid';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const page = () => {
  return (
    <div className="min-h-screen pb-6">
      <div className="container mx-auto px-4 py-8 ">
        {/* Header Section */}
        <div className="my-10">
          <h1 className="text-5xl font-bold text-blue-600 mb-6 secondary-font">
            Neighborhoods
          </h1>
          <p className="text-[#4B5563] text-lg font-normal max-w-4xl mt-4">
            City life gives you a feel for everyday life in a neighborhood so
            you can decide if a home and neighborhood fits right for you.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 relative">
            <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600 h-5 w-5" />
            <Input
              placeholder="Search"
              className="py-6 px-4 w-full max-w-4xl placeholder:text-sm 
           placeholder:pl-6 focus:border-0"
            />
          </div>
        </div>

        {/* Neighborhoods Grid */}
        <NeighborhoodsGrid />
      </div>
    </div>
  );
}

export default page