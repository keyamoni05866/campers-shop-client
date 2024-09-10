import { useAppSelector } from "../../redux/hook";

const PricingDetails = () => {
  const { selectedProducts, totalPrice } = useAppSelector(
    (store) => store.cart
  );
  return (
    <div className="lg:w-80 w-full h-full border border-gray-200 bg-opacity-35 rounded-md">
      <h1 className="text-3xl font-bold text-dark text-center  mt-5 uppercase">
        Pricing Details
      </h1>
      <div className="divider mt-0"></div>
      <div className="px-6 py-4 space-y-6 ">
        <p className="text-lg font-semibold text-dark mt-2">
          Selected Products: {selectedProducts}
        </p>
        <p className="text-lg text-dark font-semibold mt-2">
          Total Price: ${totalPrice}
        </p>
      </div>
      <div className="pb-5 px-4 mt-10 ">
        <button className="custom-outline-btn w-full">Place Order</button>
      </div>
    </div>
  );
};

export default PricingDetails;
