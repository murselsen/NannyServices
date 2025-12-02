import { createSlice } from "@reduxjs/toolkit";
import { fetchNannies } from "./thunks.js";
const nanniesSlice = createSlice({
  name: "nannies",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNannies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNannies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchNannies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default nanniesSlice.reducer;
