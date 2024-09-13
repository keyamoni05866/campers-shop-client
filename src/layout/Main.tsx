import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import PageRefresh from "./PageRefresh";

const Main = () => {
  PageRefresh();
  return (
    <>
      <div className=" max-w-screen-xl   mx-auto ">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Main;
