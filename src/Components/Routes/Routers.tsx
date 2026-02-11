import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayot/AppLayout";
import Home from "../../Pages/Home";

import About from "../../Pages/About";
import Ingredients from "../../Pages/Ingredients";
import Tools from "../../Pages/Tools";
import UrlNotFound from "../UrlMissMatch/UrlNotFound";
import Features from "../Features/Features";
import ShopAll from "../../Pages/ShopAll";
import LoginForm from "../../Pages/LoginForm";
import Registration from "../ResgistrationForm/RegistrationForm";
import ProductDetails from "../ProductDetails/ProductDetails";



const Routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <ShopAll />}, 
      { path: "tools", element: <Tools /> },
      { path: "ingredients", element: <Ingredients /> },
      { path: "about", element: <About /> },
      {path: "profile", element: <LoginForm />},
      {path: "register", element: <Registration />},
    ],
  },
  {
   path: "products/:id", 
   element: <ProductDetails/> 
  },
  {
    path: "*",
    element: <UrlNotFound />,
  }
]);

export default Routers;
