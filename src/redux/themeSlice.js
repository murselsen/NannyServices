import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
  name: "theme",
  initialState: {
    mode: "red",
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
  selectors: {
    getMode: (state) => state.theme.mode,
  },
});

export default theme.reducer;
export const { setMode } = theme.actions;
export const { getMode } = theme.selectors;
