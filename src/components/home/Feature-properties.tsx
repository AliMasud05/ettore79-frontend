import React from 'react'
import PropertyCard from '../property/PropertyCard';

const FeatureProperties = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className='text-center flex flex-col gap-2 mb-10'>
        <h1 className='secondary-font font-bold text-3xl md:text-[44px] '>Featured Properties</h1>
        <p className='text-base'>
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