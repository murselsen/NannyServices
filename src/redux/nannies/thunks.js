import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNannies = createAsyncThunk(
  "nannies/fetchNannies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://murselsen-com-default-rtdb.firebaseio.com/"
      );

      console.log("Fetched nannies:", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
