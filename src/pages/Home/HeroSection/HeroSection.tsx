import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="hero custom-background lg:h-[500px] lg:pb-0 px-5 pb-24 lg:pt-0 pt-16  xl:min-h-screen">
      <div className="hero-content xl:gap-40 flex-col lg:flex-row-reverse ">
        <div className="mb-3  lg:mb-0 mx-auto  side-pic">
          {/* <img
            src={logo}
            className="bg-black  xl:w-[400px] lg:w-[300px] lg:h-[300px]  xl:h-[400px] rounded-full"
          /> */}
        </div>
        <div className=" xl:ms-12  xl:mb-16 text-center">
          <div className="">
            <h2 className="text-[#1F1E1E] text-2xl lg:text-3xl font-bold xl:text-3xl ">
              Embrace the Outdoors with{" "}
              <span className="primary-color"> Campers Shop!</span> <br />
              <span className=" font-bold lg:text-2xl primary-color"></span>
            </h2>

            <div className=" lg:w-[600px]  text-justify mt-5  text-sm xl:text-md">
              <p className=" text-[#1F1E1E]">
                Discover a wide range of essential and exciting camping gear at
                Campers Shop. From durable tents and cozy sleeping bags to
                portable stoves and fun outdoor gadgets, we have everything you
                need for your next adventure. Gear up and make your camping
                experience unforgettable! Your journey to the great outdoors
                starts here.
              </p>
            </div>
            <div className="absolute mt-5">
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
