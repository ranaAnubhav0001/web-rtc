import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Authenticate from "../pages/Authenticate/Authenticate";
import AuthLayout from "../pages/Layout/AuthLayout";
import Activate from "../pages/Activate/Activate";
import SemiPrivateRoutes from "./SemiPrivateRoutes/SemiPrivateRoutes";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Rooms from "../pages/Rooms/Rooms";
import GuestRoutes from "./GuestRoutes/GuestRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            
            //GUEST ROUTE
            {
                element: <GuestRoutes />,
                children: [
                    {
                        path: 'authenticate',
                        element: <Authenticate />
                    },

                ]
            },

            //SEMI PRIVATE ROUTE
            {
                element: <SemiPrivateRoutes />,
                children: [
                    {
                        path: 'activate',
                        element: <Activate />
                    }
                ]
            },

            //PROTECTED ROUTE
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: 'rooms',
                        element: <Rooms />
                    }
                ]
            }
        ],
    },

]);
