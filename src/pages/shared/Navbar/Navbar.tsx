import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className="navbar lg:px-[100px]  custom-background ">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Product Management</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <div className=" flex">
            <img src={logo} alt="" className="w-10   rounded-xl" />
            <h5 className="text-xl  ms-1  font-semibold italic">
              Campers
              <span className="text-xl  ms-2  font-semibold italic primary-color">
                Shop
              </span>
            </h5>
          </div>
        </div>

        {/* for large  */}
        <div className="navbar-center hidden lg:flex text-black">
          <ul className="menu menu-horizontal px-1 text-[15px]">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <a>Product Management</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="  primary-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
