import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
    {
      path:'/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <Registration></Registration>
    }
  ]);
  export default router