import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "fetchWeather",
  async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3dd2ddccf0ab6600361e28b999566fff`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchforecast = createAsyncThunk(
  "fetchforecast",
  async ({ a, b }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${a}&lon=${b}&appid=3dd2ddccf0ab6600361e28b999566fff`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCityNameFromCoordinates = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await response.json();
    if (data.address && data.address.city) {
      return data.address.city;
    }
    return "City not found";
  } catch (error) {
    console.error("Error fetching city name:", error);
    return "Error fetching city name";
  }
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    count: 0,
    item:[],
  },
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
    },
    addarray(state,action){
      state.item=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      console.log("error", action.error);
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const weathersliceactions=weatherSlice.actions;

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    isLoading: false,
    item: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchforecast.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchforecast.fulfilled, (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchforecast.rejected, (state, action) => {
      console.log("error", action.error);
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const citySlice = createSlice({
  name: "city",
  initialState: {
    list: [],
  },
  reducers: {
    additem(state, action) {},
  },
});
