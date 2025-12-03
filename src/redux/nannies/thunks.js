import { createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Firebase configuration
import { firebaseConfig } from "../config.js";

// Redux slice action
import { setItems } from "./slice.js";

const firebaseApp = initializeApp(firebaseConfig);

export const fetchNannies = createAsyncThunk(
  "nannies/fetchNannies",
  async (_, thunkAPI) => {
    try {
      const database = getDatabase(firebaseApp);

      const nanniesRef = ref(database, "/");

      onValue(nanniesRef, (snapshot) => {
        return thunkAPI.dispatch(setItems(snapshot.val()));
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
