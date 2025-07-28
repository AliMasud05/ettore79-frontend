import Image from 'next/image';
import React from 'react'

interface Testimonial {
  id: number;
  rating: number;
  content: string;
  author: string;
  image: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className=" p-6 rounded-xl 
    shadow-sm h-full flex flex-col bg-[#FF924D]/15">
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-orange-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 text-sm font-normal text-justify mb-6 flex-grow">
        &quot;{testimonial.content}&quot;
      </p>
      <div className="flex items-center mt-auto">
        <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden -mt-2">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-medium text-gray-900 text-base">
            {testimonial.author}
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default TestimonialCard