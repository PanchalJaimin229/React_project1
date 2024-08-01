import { configureStore } from "@reduxjs/toolkit";
import { reducerFun } from "./Reducers";


export const store = configureStore({
    reducer:{
        count:reducerFun
    }
})