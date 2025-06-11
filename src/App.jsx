import BannerSection from "../components/bannerSection";
import BrandsSection from "../components/brandsSection";
import FeaturesSection from "../components/featuresSection";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import NavigationBar from "../components/navigationBar";
import ScrollBoxSection from "../components/scrollBoxSection";
import SlideShowSection from "../components/slideShowSection";
import SubscribeSection from "../components/subscribeSection";
import TravelPlanSection from "../components/travelPlans";
import "./App.css";

export default function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <BrandsSection />
      <ScrollBoxSection />
      <TravelPlanSection />
      <BannerSection />
      <FeaturesSection />
      <SlideShowSection />
      <img
        src="Layer_1.svg"
        alt=""
        className="absolute right-0 w-full top-9/12 xl:top-[64.5%] z-0"
      />
      <SubscribeSection />
      <Footer />
    </>
  );
}
