import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="mt-12 mb-28 px-4 lg:px-24 min-h-screen">
      {/* <div className=" side-text">
        <p className="font-semibold ms-2 lg:text-[22px] ">
          Featured <span className="primary-color"> Products</span>
        </p>
        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            Must-Have Camping Gear
          </h2>
        </div>
      </div> */}

      <div className="mt-10 mx-5 card-grid   gap-6 ">
        <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link
                to="/products/singleProduct"
                className="custom-outline-btn flex   items-center justify-center"
              >
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link className="custom-outline-btn flex   items-center justify-center">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link className="custom-outline-btn flex   items-center justify-center">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link className="custom-outline-btn flex   items-center justify-center">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link className="custom-outline-btn flex   items-center justify-center">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
