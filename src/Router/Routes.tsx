import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

import AboutUs from "./../pages/AboutUs/AboutUs";
import ProductManagementController from "./../pages/ProductManagement/ProductManagementController";
import UpdateProductModal from "../pages/ProductManagement/UpdateProductModal";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/productManagement",
        element: <ProductManagementController></ProductManagementController>,
      },
      {
        path: "products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProductModal></UpdateProductModal>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/products/${params.id}`),
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default router;
