import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayot/AppLayout";
import Home from "../../Pages/Home";

import About from "../../Pages/About";
import Ingredients from "../../Pages/Ingredients";
import Tools from "../../Pages/Tools";
import UrlNotFound from "../UrlMissMatch/UrlNotFound";
import Features from "../Features/Features";
import ShopAll from "../../Pages/ShopAll";


const Routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <ShopAll />, 
        children: [{ path: "collection", element: <Features /> }] },
      { path: "tools", element: <Tools /> },
      { path: "ingredients", element: <Ingredients /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "*",
    element: <UrlNotFound />,
  }
]);

export default Routers;
