import { createBrowserRouter, } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login"; 
import Signup from "../components/Signup/Signup";
import Checkout from "../components/Checkout/Checkout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Signup></Signup>

        },
        {
          path:'/checkout/:id',
          element: <Checkout></Checkout>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

        }
      ]
    },
  ]);

  export default router