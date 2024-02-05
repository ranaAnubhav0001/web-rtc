import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} /> 
            
            
        </>
    )
);