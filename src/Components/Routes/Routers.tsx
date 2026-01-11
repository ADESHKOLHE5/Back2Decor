import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayot/AppLayout";
import Home from "../../Pages/Home";
import { Shop } from "@mui/icons-material";
import About from "../../Pages/About";
import Ingredients from "../../Pages/Ingredients";
import Tools from "../../Pages/Tools";
import UrlNotFound from "../UrlMissMatch/UrlNotFound";


const Routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
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
