import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Components/AppLayot/AppLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Ingredients from "../Pages/Ingredients";
import Tools from "../Pages/Tools";
import UrlNotFound from "../Components/UrlMissMatch/UrlNotFound";
import ShopAll from "../Pages/ShopAll";
import LoginForm from "../Pages/LoginForm";
import Registration from "../Components/ResgistrationForm/RegistrationForm";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import AdminDashboard from "../Pages/AdminDashBoard";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { 
        path: "shop", 
        element: 
          <ProtectedRoute requiredRole={["admin", "user"]}>
            <ShopAll />
          </ProtectedRoute>
        },
       { 
        path: "products/:id", 
        element: <ProductDetails />
       },
  
      { 
        path: "admin", 
        element: (
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        )
      },
      { path: "tools", element: <Tools /> },
      { path: "ingredients", element: <Ingredients /> },
      { path: "about", element: <About /> },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <Registration /> },
    ],
  },
  {
    path: "*",
    element: <UrlNotFound />,
  }
]);

export default Routers;
