import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    gitApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    gitGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { gitApiConfiguration, gitGenres } = homeSlice.actions;
export default homeSlice.reducer;
