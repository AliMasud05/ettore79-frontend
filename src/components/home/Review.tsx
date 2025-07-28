import profile from "@/assets/agent/Image (8).png";
import TestimonialCard from '../card/TestimonialCard';

interface Testimonial {
  id: number;
  rating: number;
  content: string;
  author: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    content:
      "Working with OIKY was amazing. They made the entire home buying process so much easier. The platform's management tools and excellent customer service made everything smooth. The platform helped me find my dream home quickly and efficiently.",
    author: "Aly White",
    image: profile.src,
  },
  {
    id: 2,
    rating: 5,
    content:
      "OIKY is a trusted partner and was helpful. The customer service was excellent and the search tools made finding properties easier. The platform made buying my first home a breeze and I highly recommend it.",
    author: "Floyd Miles",
    image: profile.src,
  },
  {
    id: 3,
    rating: 5,
    content:
      "Working with OIKY was amazing. They made the entire home buying process so much easier. The platform's management tools and excellent customer service made everything smooth. The platform is amazing!",
    author: "Annette Black",
    image: profile.src,
  },
];


const Review = () => {
  return (
    <div>
      {/* Customer Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl secondary-font font-bold text-gray-900 text-center mb-16">
            What our customers are saying about us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-12 space-x-2">
            <button className="w-3 h-3 rounded-full bg-gray-800"></button>
            <button className="w-3 h-3 rounded-full bg-orange-500"></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;