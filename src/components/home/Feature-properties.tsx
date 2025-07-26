import React from 'react'
import PropertyCard from '../property/PropertyCard';

const FeatureProperties = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className='text-center'>
        <h1 className='secondary-font font-bold text-4xl mb-4  text-[#]'>Featured Properties</h1>
        <p>
          Discover the best properties available in Mexico&apos;s most popular
          areas
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
}

export default FeatureProperties;