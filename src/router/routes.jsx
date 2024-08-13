import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllStudents from "../Components/Dashboard/AllStudents/AllStudents";
import ClassRoom from "../Components/Dashboard/ClassRoom/ClassRoom";
import AllTeachers from "../Components/Dashboard/AllTeachers/AllTeachers";

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
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'allstudent',
          element:<AllStudents></AllStudents>
        },
        {
          path:'createclassroom',
          element:<ClassRoom></ClassRoom>
        },
        {
          path:'allteacher',
          element: <AllTeachers></AllTeachers>
        }
      ]
    }
  ]);
  export default router