import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import PricingDetails from "./PricingDetails";
import SingleCartProduct from "./SingleCartProduct";

const Cart = () => {
  const products = useAppSelector((store) => store.cart.products);
  console.log(products);
  return (
    <div className="my-[70px] px-4 lg:px-20  min-h-screen ">
      <div className="flex lg:flex-row  justify-center lg:space-x-40">
        <div className="space-y-5 lg:mt-0 mt-5">
          {/* Cart Products */}
          {products.length ? (
            products.map((product: any) => (
              <SingleCartProduct key={product._id} product={product} />
            ))
          ) : (
            <p>No Product Found </p>
          )}
        </div>

        {/* order pricing details */}
        <PricingDetails></PricingDetails>
      </div>
    </div>
  );
};

export default Cart;
