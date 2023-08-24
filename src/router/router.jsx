import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MenuItemDetails from "../pages/MenuItemDetails/MenuItemDetails";
import Cart from "../pages/Cart/Cart";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/menuItemDetails/:_id',
                element:<MenuItemDetails/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ]
    }
]);

export default router;
