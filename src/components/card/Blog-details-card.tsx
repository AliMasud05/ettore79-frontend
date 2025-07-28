import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import blog1 from "@/assets/blog/blog4.png";
import agent from "@/assets/placeholders/user.png";



export default function BlogDetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" ">
        <div className="mb-6">
          <div className="flex flex-col  my-4">
            <h1 className="text-5xl secondary-font font-bold text-purple-700 mb-8">
              Professional Photography
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                <Image
                  src={blog1.src}
                  alt="Olivia Rhye"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Olivia Rhye</p>
                <p className="text-sm text-gray-500">20 Jan 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <Image
            src={blog1.src}
            alt="Professional Photography"
            width={1000}
            height={1000}
            className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
          />
        </div>

        <div className="prose  mb-12 max-w-7xl">
          <p
            className="text-gray-700  mb-6
           text-base font-normal leading-7 text-justify "
          >
            In today’s visually driven world, first impressions are
            everything—especially when it comes to real estate. Professional
            property photography goes beyond just taking pictures; it’s about
            telling the story of a space. We offer high-end photography services
            that are meticulously crafted to highlight your property&apos;s
            unique character, atmosphere, and value. From the moment a potential
            buyer or guest views your listing, our images create an emotional
            connection by showcasing clean lines, natural lighting, functional
            spaces, and the overall lifestyle that the property offers.
          </p>

          <p className="text-gray-700 leading-7  text-justify">
            Whether it’s a cozy urban apartment, a spacious family home, a
            luxury villa, or a rental property on Airbnb, we tailor each
            photoshoot to match the style, mood, and purpose of your space. Our
            services include wide-angle shots to emphasize room size,
            detail-oriented compositions to capture premium finishes and décor,
            and carefully timed lighting to create warmth and visual balance. We
            also offer aerial drone photography to highlight lot size,
            landscaping, and neighborhood surroundings, as well as twilight
            photography for those magical evening shots that add sophistication
            and charm.
          </p>
          <p
            className="text-gray-700  my-6
           text-base font-normal leading-7 text-justify "
          >
            In today’s visually driven world, first impressions are
            everything—especially when it comes to real estate. Professional
            property photography goes beyond just taking pictures; it’s about
            telling the story of a space. We offer high-end photography services
            that are meticulously crafted to highlight your property&apos;s
            unique character, atmosphere, and value. From the moment a potential
            buyer or guest views your listing, our images create an emotional
            connection by showcasing clean lines, natural lighting, functional
            spaces, and the overall lifestyle that the property offers.
          </p>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">What People Are Saying</h3>
          <div className=" mb-6">
            <div className="flex items-center mb-2">
              <div className="flex items-center mb-2">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                  <Image
                    src={agent.src}
                    alt="Agent"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 mb-2">
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
            </div>
            <p className="text-gray-700 text-justify">
              Molthy helped me find someone to cook a few meals when I was
              overwhelmed. The support felt real. Im so grateful for this
              platform!
            </p>
          </div>

          <div className="">
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
    </div>
  );
}
