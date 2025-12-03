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
import PrivateRoutes from "./PrivateRoutes";
import UpdateProperty from "../components/UpdateProperty/UpdateProperty";
import ErrorPage from "../components/ErrorPage/ErrorPage";
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
        element: <PrivateRoutes><MyProperties /></PrivateRoutes>
      },
      {
        path: "/addProperties",
        element: <PrivateRoutes><AddProperties /></PrivateRoutes>
      },
      {
        path: "/myRatings",
        element: <PrivateRoutes><MyRatings /></PrivateRoutes>
      }
      ,
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
        loader: ({ params }) => fetch(`https://assignment-10-server-ten-dun.vercel.app/items/${params.id}`),
       element: <PrivateRoutes><PropertyDetails /></PrivateRoutes>
      },
      {
        path: "/updateProperty/:id",
        element: <PrivateRoutes><UpdateProperty /></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-ten-dun.vercel.app/items/${params.id}`)
      },
      {
        path: "*",
        Component: ErrorPage
      }

    ]
  }
]);