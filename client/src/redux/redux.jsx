import { configureStore } from "@reduxjs/toolkit";
import onNextSlice from "./onNextSlice";

const redux = configureStore({
    reducer:{
        next:onNextSlice,   
    },
});

export default redux;