import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/homeSlice";
import discoverReducer from "./features/discoverSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    discover: discoverReducer,
  },
});
