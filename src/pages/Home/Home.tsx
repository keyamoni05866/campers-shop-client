import Categories from "./Categories/Categories";
import HeroSection from "./HeroSection/HeroSection";
import RecommendedProducts from "./RecommandedProducts/RecommendedProducts";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <RecommendedProducts></RecommendedProducts>
      <Categories></Categories>
    </div>
  );
};

export default Home;
