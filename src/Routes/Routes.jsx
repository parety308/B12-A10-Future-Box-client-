import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";

 export const router=createBrowserRouter([

{
    path:"/",
    Component:Root,
    children:[
        {
            
        }
    ]
}
]);