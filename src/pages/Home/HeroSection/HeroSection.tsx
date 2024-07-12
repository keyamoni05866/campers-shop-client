import "./HeroSection.css";
import Typewriter from "typewriter-effect";
const HeroSection = () => {
  return (
    <div className="hero custom-background lg:h-[500px] lg:pb-0 px-5 pb-24 lg:pt-0 pt-16  xl:min-h-screen  ">
      <div className="hero-content xl:gap-28 flex-col lg:flex-row-reverse ">
        <div className="mb-3 lg:mb-0  xl:me-16 side-pic"></div>
        <div className=" xl:ms-12  xl:mb-16 text-center">
          <div className="xl:max-w-[800px] lg:max-w-[500px] xl:ms-3 lg:ms-2">
            <h1 className="  text-[#1F1E1E] text-[18px]   lg:text-xl  font-bold xl:text-3xl lg:flex lg:gap-2 mb-2   ">
              Embrace the Outdoors with
              <span className="primary-color lg:ms-0 ms-20 flex gap-2">
                Campers
                <Typewriter
                  options={{
                    strings: ["Shop!!!"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>

            <div className="  text-justify lg:mt-5   text-sm xl:text-md">
              <p className=" ms-1 text-[#1F1E1E]">
                Discover a wide range of essential and exciting camping gear at
                Campers Shop. From durable tents and cozy sleeping bags to
                portable stoves and fun outdoor gadgets, we have everything you
                need for your next adventure. Gear up and make your camping
                experience unforgettable! Your journey to the great outdoors
                starts here.
              </p>
            </div>
            <div className="absolute mt-5 ms-2">
              <button className="custom-outline-btn ">Get Started</button>
              <button className="custom-btn ms-5 "> Products</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
