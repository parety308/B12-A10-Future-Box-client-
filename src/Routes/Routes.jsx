import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import AllProperties from "../components/AllProperties/AllProperties";
import MyProperties from "../components/MyProperties/MyProperties";
import AddProperties from "../components/AddProperties/AddProperties";
import MyRatings from "../components/MyRatings/MyRatings";
import Login from "../Authentiaction/Login/Login"
import Signup from "../Authentiaction/Signup/Signup"
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
export const router = createBrowserRouter([

  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/allProperties",
        Component: AllProperties
      },
      {
        path: "/myProperties",
        Component: MyProperties
      },
      {
        path: "/addProperties",
        Component: AddProperties
      },
      {
        path: "/myRatings",
        Component: MyRatings
      },

      {
        path: "/login",
        Component: Login
      },
      {
        path: "/signup",
        Component: Signup
      },
      {
        path: "/property/:id",
        loader:({params})=>fetch(`http://localhost:3000/items/${params.id}`),
        Component:PropertyDetails
      }
    ]
  }
]);