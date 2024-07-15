import Categories from "./Categories/Categories";
import Faq from "./FAQ/Faq";
import HeroSection from "./HeroSection/HeroSection";
import RecommendedProducts from "./RecommandedProducts/RecommendedProducts";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <RecommendedProducts></RecommendedProducts>
      <Categories></Categories>
      <Faq></Faq>
    </div>
  );
};

export default Home;
