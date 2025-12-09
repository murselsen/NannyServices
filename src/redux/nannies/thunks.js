import { createAsyncThunk } from "@reduxjs/toolkit";

// Firebase
// Firebase configuration
import { firebaseConfig } from "../config.js";
import { initializeApp } from "firebase/app";
// Firebase Modules
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

// Redux slice action
import { setItems } from "./slice.js";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

const firebaseApp = initializeApp(firebaseConfig);

export const fetchNannies = createAsyncThunk(
  "nannies/fetchNannies",
  async (_, thunkAPI) => {
    try {
      const database = getDatabase(firebaseApp);

      const nanniesRef = await ref(database, "/nannies");

      onValue(
        nanniesRef,
        (snapshot) => {
          toast.success("Nannies data fetched successfully");
          return thunkAPI.dispatch(setItems(snapshot.val()));
        },
        (error) => {
          toast.error("Error fetching nannies data: " + error.message);
          return thunkAPI.rejectWithValue(error.message);
        }
      );
    } catch (error) {
      toast.error("Failed to fetch nannies data");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendAnAppointment = createAsyncThunk(
  "nannies/sendAnAppointment",
  async (appointmentData, thunkAPI) => {
    try {
      const database = getDatabase(firebaseApp);

      const appointmentsRef = ref(database, "appo2intments/" + nanoid());
      set(appointmentsRef, appointmentData)
        .then(() => {
          toast.success("Appointment sent successfully");
        })
        .catch((error) => {
          toast.error("Error sending appointment: " + error.message);
          return thunkAPI.rejectWithValue(error.message);
        });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavoriteNanny = createAsyncThunk(
  "nannies/toggleFavoriteNanny",
  async ({ nannyIndex, isFavorite }, thunkAPI) => {
    try {
      const database = getDatabase(firebaseApp);
      const favoriteRef = ref(database, `nannies/${nannyIndex}`);

      const auth = getAuth();
      const user = auth.currentUser;

      console.log("Reference to update:", favoriteRef, "Ref User:", user);
      console.log("isFavorite:", isFavorite);
      // set(favoriteRef, {
      //     favorite
      //   })
      //     .then(() => {
      //       // Data saved successfully!
      //     })
      //     .catch((error) => {
      //       // The write failed...
      //     });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
