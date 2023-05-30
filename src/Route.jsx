import {
    createBrowserRouter,
  } from "react-router-dom";

import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home/Home";
import Manupage from "./Pages/ManuPage/Manupage";
import OrderPage from "./Pages/OrderPage/OrderPage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignPu/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children :[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Manupage></Manupage>
        },
        {
          path:'/order/salad',
          element:<OrderPage></OrderPage>
        },
        {
          path:'/order/:category',
          element:<OrderPage></OrderPage>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;