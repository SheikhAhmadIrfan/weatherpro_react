import { configureStore } from "@reduxjs/toolkit";
import { forecastSlice,weatherSlice,citySlice } from "./slice/weather";

const store=configureStore({
    reducer:{
        weather:weatherSlice.reducer,
        forecast:forecastSlice.reducer,
        city:citySlice.reducer,
    }
})

export default store;