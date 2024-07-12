import banner from "../../../assets/Banner2.jpg";
import Typewriter from "typewriter-effect";
const HeroSection2 = () => {
  return (
    <div
      className="hero z-10   lg:h-[600px] "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay custom-background bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center ">
        <div className="  lg:max-w-[750px] w-full lg:mt-0  mt-12">
          <h1 className="lg:ms-[90px] ms-[28px] text-gray-300 text-[14px] lg:text-3xl  font-bold xl:text-3xl flex gap-2 xl:mb-2   ">
            Embrace the Outdoors with
            <span className="primary-color flex gap-2">
              Campers
              <Typewriter
                options={{
                  strings: ["Shop!!!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <br />
          </h1>
          <p className=" text-gray-300 text-justify lg:text-[15px] text-[10px]  mx-10   lg:mx-24">
            Discover a wide range of essential and exciting camping gear at
            Campers Shop. From durable tents and cozy sleeping bags to portable
            stoves and fun outdoor gadgets, we have everything you need for your
            next adventure. Gear up and make your camping experience
            unforgettable! Your journey to the great outdoors starts here.
          </p>
          <button className="custom-outline-btn ">Get Started</button>
          <button className="custom-btn ms-5 "> Products</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
