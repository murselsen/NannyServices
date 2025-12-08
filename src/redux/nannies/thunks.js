import { createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Firebase configuration
import { firebaseConfig } from "../config.js";

// Redux slice action
import { setItems } from "./slice.js";
import { nanoid } from "nanoid";

const firebaseApp = initializeApp(firebaseConfig);

export const fetchNannies = createAsyncThunk(
  "nannies/fetchNannies",
  async (_, thunkAPI) => {
    try {
      const database = getDatabase(firebaseApp);

      const nanniesRef = ref(database, "/nannies");

      onValue(nanniesRef, (snapshot) => {
        return thunkAPI.dispatch(setItems(snapshot.val()));
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendAnAppointment = createAsyncThunk(
  "nannies/sendAnAppointment",
  async (appointmentData, thunkAPI) => {
    try {
      const database = getDatabase(firebaseApp);

      const appointmentsRef = ref(database, "appointments/" + nanoid());
      set(appointmentsRef, appointmentData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
