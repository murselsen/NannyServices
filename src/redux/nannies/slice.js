import { createSlice } from "@reduxjs/toolkit";
import { fetchNannies } from "./thunks.js";
import { nanoid } from "nanoid";
const nanniesSlice = createSlice({
  name: "nannies",
  initialState: {
    items: [],
    filter: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setItems: (state, action) => {
      const data = action.payload;
      data.forEach((item) => {
        item.itemId = nanoid();
      });

      state.items = data;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetNannies: (state) => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.filter = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNannies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNannies.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchNannies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default nanniesSlice.reducer;
export const { setItems, resetNannies, setFilter } = nanniesSlice.actions;
