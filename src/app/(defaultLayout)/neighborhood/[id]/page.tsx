import agent1 from "@/assets/agent/Image (10).png";
import agent2 from "@/assets/agent/Image (11).png";
import agent3 from "@/assets/agent/Image (8).png";
import gallary from "@/assets/school/Frame 1610068598 (2).png";
import img1 from "@/assets/school/img1.png";
import img4 from "@/assets/school/img4.png";
import map from "@/assets/school/Screenshot 2024-07-27 at 12.28.25 AM 1 (2).png";
import AgentCard from "@/components/card/agent-card";
import ExploreArea from "@/components/map/leaflet-map";
import PropertyCard from "@/components/property/PropertyCard";
import Image from "next/image";

const page = () => {
  const agentData = [
    {
      name: "Sarah Johnson",
      company: "Hometown Properties",
      rating: 4.8,
      reviewCount: 156,
      priceRangeMin: "$80K",
      priceRangeMax: "$1.2M",
      salesCount: 278,
      imageUrl: agent3.src,
      category: "residential",
    },
    {
      name: "David Chen",
      company: "Metro Real Estate Group",
      rating: 4.9,
      reviewCount: 203,
      priceRangeMin: "$100K",
      priceRangeMax: "$4.2M",
      salesCount: 612,
      imageUrl: agent1.src,
      category: "residential",
    },
    {
      name: "Emily Wilson",
      company: "Coastal Living Realty",
      rating: 4.6,
      reviewCount: 72,
      priceRangeMin: "$75K",
      priceRangeMax: "$2.8M",
      salesCount: 189,
      imageUrl: agent2.src,
      category: "residential",
    },
    {
      name: "Robert Garcia",
      company: "Summit Properties",
      rating: 4.8,
      reviewCount: 134,
      priceRangeMin: "$60K",
      priceRangeMax: "$3.1M",
      salesCount: 421,
      imageUrl: agent3.src,
      category: "residential",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] container mt-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div>
          <Image
            src={img1}
            alt="school"
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
        <div>
          <Image
            src={img4}
            alt="school"
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
      </section>
      <section className="  w-full">
        <h1 className=" text-3xl md:text-[44px] font-semibold leading-10 md:leading-16 my-6 ">
          Neighborhood Overview{" "}
        </h1>

        <div className="grid grid-cols-2 gap-3 max-w-[400px] my-6">
          <div className="flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  d="M1.8028 6.1475L0.0552992 17.165C-0.109701 18.2525 0.197799 19.3475 0.910299 20.1875C1.26254 20.5989 1.69963 20.9293 2.19159 21.1558C2.68354 21.3824 3.21869 21.4998 3.7603 21.5H16.2403C17.3353 21.5 18.3778 21.02 19.0903 20.1875C19.4412 19.7745 19.6992 19.2908 19.8468 18.7693C19.9943 18.2478 20.0279 17.7006 19.9453 17.165L18.1978 6.1475C18.1179 5.61708 17.8494 5.13325 17.4417 4.78473C17.0339 4.43621 16.5142 4.24636 15.9778 4.25H14.4328C14.0728 2.1275 12.2278 0.5 10.0003 0.5C7.7728 0.5 5.9278 2.1275 5.5678 4.25H4.0228C2.9053 4.25 1.9753 5.045 1.8028 6.1475ZM10.0003 2C11.3953 2 12.5578 2.96 12.8953 4.25H7.1053C7.4428 2.96 8.6053 2 10.0003 2ZM6.2503 7.25C6.6628 7.25 7.0003 7.58 7.0003 8C7.0003 9.65 8.3428 11 10.0003 11C11.6578 11 13.0003 9.65 13.0003 8C13.0003 7.58 13.3378 7.25 13.7503 7.25C14.1628 7.25 14.5003 7.58 14.5003 8C14.5003 10.4825 12.4828 12.5 10.0003 12.5C7.5178 12.5 5.5003 10.4825 5.5003 8C5.5003 7.58 5.8378 7.25 6.2503 7.25Z"
                  fill="#666666"
                />
              </svg>
            </div>
            <div>
              {" "}
              <h3 className="text-base font-normal leading-6 mb-1">Students</h3>
              <p className="text-[#7B7B7B] text-base leading-6 ">120</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  d="M1.8028 6.1475L0.0552992 17.165C-0.109701 18.2525 0.197799 19.3475 0.910299 20.1875C1.26254 20.5989 1.69963 20.9293 2.19159 21.1558C2.68354 21.3824 3.21869 21.4998 3.7603 21.5H16.2403C17.3353 21.5 18.3778 21.02 19.0903 20.1875C19.4412 19.7745 19.6992 19.2908 19.8468 18.7693C19.9943 18.2478 20.0279 17.7006 19.9453 17.165L18.1978 6.1475C18.1179 5.61708 17.8494 5.13325 17.4417 4.78473C17.0339 4.43621 16.5142 4.24636 15.9778 4.25H14.4328C14.0728 2.1275 12.2278 0.5 10.0003 0.5C7.7728 0.5 5.9278 2.1275 5.5678 4.25H4.0228C2.9053 4.25 1.9753 5.045 1.8028 6.1475ZM10.0003 2C11.3953 2 12.5578 2.96 12.8953 4.25H7.1053C7.4428 2.96 8.6053 2 10.0003 2ZM6.2503 7.25C6.6628 7.25 7.0003 7.58 7.0003 8C7.0003 9.65 8.3428 11 10.0003 11C11.6578 11 13.0003 9.65 13.0003 8C13.0003 7.58 13.3378 7.25 13.7503 7.25C14.1628 7.25 14.5003 7.58 14.5003 8C14.5003 10.4825 12.4828 12.5 10.0003 12.5C7.5178 12.5 5.5003 10.4825 5.5003 8C5.5003 7.58 5.8378 7.25 6.2503 7.25Z"
                  fill="#666666"
                />
              </svg>
            </div>
            <div>
              {" "}
              <h3 className="text-base font-normal leading-6 mb-1">
                For Buy on Aiky.mx{" "}
              </h3>
              <p className="text-[#3adb1a] text-base leading-6  ">130 Homes</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  d="M1.8028 6.1475L0.0552992 17.165C-0.109701 18.2525 0.197799 19.3475 0.910299 20.1875C1.26254 20.5989 1.69963 20.9293 2.19159 21.1558C2.68354 21.3824 3.21869 21.4998 3.7603 21.5H16.2403C17.3353 21.5 18.3778 21.02 19.0903 20.1875C19.4412 19.7745 19.6992 19.2908 19.8468 18.7693C19.9943 18.2478 20.0279 17.7006 19.9453 17.165L18.1978 6.1475C18.1179 5.61708 17.8494 5.13325 17.4417 4.78473C17.0339 4.43621 16.5142 4.24636 15.9778 4.25H14.4328C14.0728 2.1275 12.2278 0.5 10.0003 0.5C7.7728 0.5 5.9278 2.1275 5.5678 4.25H4.0228C2.9053 4.25 1.9753 5.045 1.8028 6.1475ZM10.0003 2C11.3953 2 12.5578 2.96 12.8953 4.25H7.1053C7.4428 2.96 8.6053 2 10.0003 2ZM6.2503 7.25C6.6628 7.25 7.0003 7.58 7.0003 8C7.0003 9.65 8.3428 11 10.0003 11C11.6578 11 13.0003 9.65 13.0003 8C13.0003 7.58 13.3378 7.25 13.7503 7.25C14.1628 7.25 14.5003 7.58 14.5003 8C14.5003 10.4825 12.4828 12.5 10.0003 12.5C7.5178 12.5 5.5003 10.4825 5.5003 8C5.5003 7.58 5.8378 7.25 6.2503 7.25Z"
                  fill="#666666"
                />
              </svg>
            </div>
            <div>
              {" "}
              <h3 className="text-base font-normal leading-6 mb-1">Rent</h3>
              <p className="text-[#7B7B7B] text-base leading-6 ">$800 - $12k</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  d="M1.8028 6.1475L0.0552992 17.165C-0.109701 18.2525 0.197799 19.3475 0.910299 20.1875C1.26254 20.5989 1.69963 20.9293 2.19159 21.1558C2.68354 21.3824 3.21869 21.4998 3.7603 21.5H16.2403C17.3353 21.5 18.3778 21.02 19.0903 20.1875C19.4412 19.7745 19.6992 19.2908 19.8468 18.7693C19.9943 18.2478 20.0279 17.7006 19.9453 17.165L18.1978 6.1475C18.1179 5.61708 17.8494 5.13325 17.4417 4.78473C17.0339 4.43621 16.5142 4.24636 15.9778 4.25H14.4328C14.0728 2.1275 12.2278 0.5 10.0003 0.5C7.7728 0.5 5.9278 2.1275 5.5678 4.25H4.0228C2.9053 4.25 1.9753 5.045 1.8028 6.1475ZM10.0003 2C11.3953 2 12.5578 2.96 12.8953 4.25H7.1053C7.4428 2.96 8.6053 2 10.0003 2ZM6.2503 7.25C6.6628 7.25 7.0003 7.58 7.0003 8C7.0003 9.65 8.3428 11 10.0003 11C11.6578 11 13.0003 9.65 13.0003 8C13.0003 7.58 13.3378 7.25 13.7503 7.25C14.1628 7.25 14.5003 7.58 14.5003 8C14.5003 10.4825 12.4828 12.5 10.0003 12.5C7.5178 12.5 5.5003 10.4825 5.5003 8C5.5003 7.58 5.8378 7.25 6.2503 7.25Z"
                  fill="#666666"
                />
              </svg>
            </div>
            <div>
              {" "}
              <h3 className="text-base font-normal leading-6 mb-1">
                For Rent On Aiky.mx
              </h3>
              <p className="text-[#3bf316] text-base leading-6 ">130 Homes</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <div>
          <h1 className="text-2xl font-semibold leading-9 my-4">Map</h1>
          <Image
            src={map}
            alt="map"
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold leading-9 my-4">All Photos</h1>
          <Image
            src={gallary}
            alt="map"
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
      </section>
      <section className=" w-full">
        <h2 className="text-2xl md:text-3xl font-semibold leading-6 md:leading-12 text-[#040B0C] my-4">
          Location Information
        </h2>
        <div>
          {/* <Image
             src={map}
             alt="map"
             width={1000}
             height={1000}
             className="object-cover w-full rounded-2xl"
             priority
             loading="eager"
           /> */}
          <ExploreArea />
        </div>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold leading-8 md:leading-12 text-[#040B0C] my-4">
          Agents And Landlords Specializing in Attendance Zone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agentData.map((agent, index) => {
            return (
              <AgentCard
                key={index}
                name={agent.name}
                company={agent.company}
                rating={agent.rating}
                reviewCount={agent.reviewCount}
                priceRangeMin={agent.priceRangeMin}
                priceRangeMax={agent.priceRangeMax}
                salesCount={agent.salesCount}
                imageUrl={agent.imageUrl}
              />
            );
          })}
        </div>
      </section>
      <section className="w-full">
        <h2 className="text-3xl font-semibold leading-12 text-[#040B0C] my-4">
          Homes for Sale And Rent
        </h2>
        <div className="flex gap-6 my-6 flex-wrap">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </section>
    </div>
  );
};

export default page;
