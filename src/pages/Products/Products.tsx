import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/api";
import { TProduct } from "../../types";
const Products = () => {
  const { data: products } = useGetProductsQuery({});
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
        {products?.data && products?.data?.length > 0 ? (
          products?.data?.map((product: TProduct) => (
            <div
              key={product._id}
              className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto"
            >
              <div className="bg-base-200 w-[360px]  h-[220px] flex justify-center items-center">
                <img
                  src={product.image}
                  alt="Product Picture"
                  className=" w-full h-full "
                />
              </div>
              <div className=" my-4 mx-5">
                <h3 className="card-title">{product?.name}</h3>
                <h4 className=" text-lg mt-3 ">
                  Price:{" "}
                  <span className="font-semibold">${product?.price}</span>
                </h4>

                <div className="card-actions items-center justify-between mt-2">
                  <div className="flex gap-2  items-center  justify-center">
                    {" "}
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={product?.ratings}
                      readOnly
                    />
                    <span className="text-lg font-semibold mt-[2px] ">
                      {product?.ratings} <span>/5</span>
                    </span>
                  </div>
                  <Link
                    to={`/products/${product._id}`}
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
          ))
        ) : (
          <h2 className="text-center">No Product Found!!! </h2>
        )}
      </div>
    </div>
  );
};

export default Products;
