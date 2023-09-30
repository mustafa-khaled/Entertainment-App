import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../utils/api";

export const fetchApiConfig = createAsyncThunk(
  "home/fetchApiConfig",
  async () => {
    const response = await fetchDataFromApi("/configuration");
    const url = response?.images?.base_url + "original";
    return url;
  },
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    loading: false,
    error: null,
  },
  reducers: {
    gitApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiConfig.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApiConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.url = action.payload;
      })
      .addCase(fetchApiConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { gitApiConfiguration } = homeSlice.actions;
export default homeSlice.reducer;
