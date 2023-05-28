import {
    createBrowserRouter,
  } from "react-router-dom";

import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home/Home";
import Manupage from "./Pages/ManuPage/Manupage";
import OrderPage from "./Pages/OrderPage/OrderPage";

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
          path:'/order',
          element:<OrderPage></OrderPage>
        }
      ]
    },
  ]);

  export default router;