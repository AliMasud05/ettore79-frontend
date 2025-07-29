import Banner from "@/components/home/Banner";
import HomeDiscription from "@/components/home/discription";
import FeatureProperties from "@/components/home/Feature-properties";
import Review from "@/components/home/Review";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <FeatureProperties />
      <HomeDiscription/>
      <Review/>
    </div>
  );
};

export default HomePage;
