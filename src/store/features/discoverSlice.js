import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../utils/api";

const initialState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
};

export const fetchDiscoverData = createAsyncThunk(
  "discover/fetchDiscoverData",
  async ({ type, page }) => {
    const response = await fetchDataFromApi(`/discover/${type}?page=${page}`);
    return response;
  },
);

const discoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {
    getDiscoverData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscoverData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiscoverData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDiscoverData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { getDiscoverData } = discoverSlice.actions;
export default discoverSlice.reducer;
