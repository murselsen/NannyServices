import { createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// Firebase configuration
import { firebaseConfig } from "../config.js";
import { setUser } from "./slice.js";
import { nanoid } from "nanoid";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const loginUser = createAsyncThunk(
  "auth/loginuser",
  async (credentials, thunkAPI) => {
    try {
      const auth = getAuth(firebaseApp);

      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          console.log("User logged in:", userCredential.user);
          const user = userCredential.user;
          thunkAPI.dispatch(setUser(user));
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

export const registerUser = createAsyncThunk(
  "auth/registeruser",
  async (credentials, thunkAPI) => {
    try {
      const auth = getAuth(firebaseApp);

      const database = getDatabase(firebaseApp);
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          console.log(
            "User registered in:",
            userCredential,
            userCredential.user
          );
          const usersRef = ref(database, "users/" + nanoid());
          const user = userCredential.user;
          user.name = credentials.name;
          user.favoriteNannies = [];
          set(usersRef, user);

          thunkAPI.dispatch(setUser(user));
          return;
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
