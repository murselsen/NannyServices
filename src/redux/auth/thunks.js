import { createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Firebase configuration
import { firebaseConfig } from "../config.js";
import { setUser } from "./slice.js";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const loginUser = createAsyncThunk(
  "auth/loginuser",
  async (credentials, thunkAPI) => {
    try {
      // const database = getDatabase(firebaseApp);

      const auth = getAuth(firebaseApp);

      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          console.log("User logged in:", userCredential, userCredential.user);
          thunkAPI.dispatch(setUser(userCredential.user));
          console.clear();
        })
        .catch((error) => {
          console.error("Error logging in:", error);
          return thunkAPI.rejectWithValue(error.message);
        });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
