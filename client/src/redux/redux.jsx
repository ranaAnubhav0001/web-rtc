import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import activateSlice from "./activateSlice";

const redux = configureStore({
    reducer: {
        authSlice,
        activateSlice
    },
});

export default redux;