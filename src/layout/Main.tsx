import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="xl:max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
