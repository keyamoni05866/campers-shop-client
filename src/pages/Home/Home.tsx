import Categories from "./Categories/Categories";
import Testimonial from "./ExtraSection/Testimonial";
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
      {/* <Testimonial></Testimonial> */}
      <Faq></Faq>
      <Featured></Featured>
    </div>
  );
};

export default Home;
