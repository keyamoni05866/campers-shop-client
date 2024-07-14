import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCouch,
  faFirstAid,
  faTent,
} from "@fortawesome/free-solid-svg-icons";
import "./Categories.css";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons/faShoePrints";
const Categories = () => {
  return (
    <div className="mt-12 mb-28 px-4 lg:px-[100px]">
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

      {/* Categories */}
      <div className="icon-main-div">
        <div className=" icon-div shadow-md">
          <FontAwesomeIcon className="text-4xl pt-7" icon={faTent} />

          <h4 className="text-xl pb-3 font-semibold ">Tent</h4>
        </div>
        <div className=" icon-div shadow-md">
          <FontAwesomeIcon className="text-4xl ms-6 pt-7" icon={faShoePrints} />

          <h4 className="text-lg pb-3 font-semibold ">Footwear</h4>
        </div>
        <div className=" icon-div shadow-md">
          <FontAwesomeIcon className="text-4xl ms-14 pt-7" icon={faCouch} />

          <h4 className="text-lg pb-3 font-semibold ">Camping Furniture</h4>
        </div>
        <div className=" icon-div shadow-md">
          <FontAwesomeIcon className="text-4xl pt-7" icon={faTent} />

          <h4 className="text-xl pb-3 font-semibold ">Bags</h4>
        </div>
        <div className=" icon-div shadow-md">
          <FontAwesomeIcon className="text-4xl pt-7" icon={faBagShopping} />

          <h4 className="text-xl pb-3 font-semibold ">Bag</h4>
        </div>
        <div className=" icon-div shadow-md">
          <FontAwesomeIcon className="text-4xl ms-2 pt-7" icon={faFirstAid} />

          <h4 className="text-xl pb-3 font-semibold ">Safety</h4>
        </div>
        {/* <div className=" icon-div shadow-md">
          <FontAwesomeIcon className="text-4xl pt-7" icon={faTent} />

          <h4 className="text-xl pb-3 font-semibold ">Tent</h4>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
