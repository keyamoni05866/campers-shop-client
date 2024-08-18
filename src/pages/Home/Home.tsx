import Categories from "./Categories/Categories";
import Testimonial from "./UniqueSection/Testimonial";
import Faq from "./FAQ/Faq";
import Featured from "./Featured/Featured";
import HeroSection from "./HeroSection/HeroSection";
import RecommendedProducts from "./RecommandedProducts/RecommendedProducts";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <RecommendedProducts></RecommendedProducts>
      <Categories></Categories>
      <Featured></Featured>
      <Testimonial></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default Home;
