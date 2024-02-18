import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const redux = configureStore({
    reducer:{
        authSlice  
    },
});

export default redux;