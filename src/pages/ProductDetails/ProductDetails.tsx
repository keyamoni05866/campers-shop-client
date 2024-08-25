import { useParams } from "react-router-dom";
import { useProductDetailsQuery } from "../../redux/api/api";
import { Rating } from "@smastrom/react-rating";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useProductDetailsQuery(id);
  const singleProduct = data?.data;
  //   console.log(productData.name);

  return (
    <div className="my-[100px] px-4 lg:px-20  ">
      <div className="w-full flex justify-between   gap-8 ">
        <div className="w-[46%] h-[450px] bg-[#F0EEED] flex justify-center items-center  rounded-[20px]">
          <img
            src={singleProduct?.image}
            alt="Product Image"
            className="w-full h-full"
          />
        </div>
        <div className="w-[50%]">
          <h4 className="mb-3 text-[32px] font-black uppercase ">
            {singleProduct?.name}
          </h4>
          <div className="mb-3 flex gap-3  items-center  w-[220px] justify-center">
            {" "}
            <Rating
              style={{ maxWidth: 150 }}
              value={singleProduct?.ratings}
              readOnly
            />
            <span className="text-2xl  ">
              {singleProduct?.ratings} <span>/5</span>
            </span>
          </div>
          <h4 className="mb-3 text-[30px] font-bold ms-1">
            {singleProduct?.price}
          </h4>
          <p className="ms-2 text-lg text-justify">
            {singleProduct?.description}
          </p>
          <div className="divider "></div>
          <h4 className=" text-3xl mt-3 my-5 ms-2">
            Category:{" "}
            <span className="font-semibold">{singleProduct?.category}</span>
          </h4>
          {/* <div className="divider "></div> */}
          <div className="flex justify-end">
            <button className=" py-3  rounded-[40px] text-white font-semibold bg-[#4f918a] w-[65%]  text-xl mt-[75px] hover:bg-[#1d2329]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
