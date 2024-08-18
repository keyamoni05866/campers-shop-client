import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCouch,
  faFirstAid,
  faTent,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
// import "./Categories.css";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons/faShoePrints";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import pic1 from "../../../assets/testimonialPictures/image1.png";
import pic2 from "../../../assets/testimonialPictures/image2.png";
import pic3 from "../../../assets/testimonialPictures/image3.png";
import pic4 from "../../../assets/testimonialPictures/image4.png";
import pic5 from "../../../assets/testimonialPictures/image5.png";
import pic6 from "../../../assets/testimonialPictures/image6.png";

const Categories = () => {
  return (
    <div className="my-16  px-3 md:px-10  lg:px-16   ">
      <div className=" side-text">
        <p className="font-semibold ms-2 lg:text-[22px] primary-color">
          Categories
        </p>
        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            Browse Products With Category
          </h2>
        </div>
      </div>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper  mt-12  "
      >
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[270px] h-[250px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img src={pic1} alt="" className=" w-full h-full" />
            <h3 className="text-4xl uppercase text-center -mt-20 text-[#FFFFFF] ">
              Bag
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className="  w-[270px] h-[250px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img src={pic1} alt="" className=" w-full h-full" />
            <h3 className="text-4xl uppercase text-center -mt-20 text-[#FFFFFF] ">
              Bag
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[270px] h-[250px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img src={pic1} alt="" className=" w-full h-full" />
            <h3 className="text-4xl  text-center -mt-20 text-[#FFFFFF] uppercase">
              Bag
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className="  w-[270px] h-[250px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img src={pic1} alt="" className=" w-full h-full" />
            <h3 className="text-4xl  text-center -mt-20 text-[#FFFFFF] uppercase">
              Bag
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className="  w-[270px] h-[250px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img src={pic1} alt="" className=" w-full h-full" />
            <h3 className="text-4xl text-center -mt-20 text-[#FFFFFF] uppercase">
              Bag
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[270px] h-[250px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img src={pic1} alt="" className=" w-full h-full" />
            <h3 className="text-4xl  text-center -mt-20 text-[#FFFFFF] uppercase">
              Bag
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
