import { createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// Firebase configuration
import { firebaseConfig } from "../config.js";
import toast from "react-hot-toast";

// Redux action to set user
import { setUser } from "./slice.js";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const loginUser = createAsyncThunk(
  "auth/loginuser",
  async (credentials, thunkAPI) => {
    try {
      const auth = getAuth(firebaseApp);

      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          return thunkAPI.dispatch(setUser(user));
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
      console.log("Registering user with credentials:", credentials);
      const auth = getAuth(firebaseApp);

      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          const user = userCredential.user;

          sendEmailVerification(user)
            .then(() => {
              toast.success("Verification email sent successfully");
            })
            .catch((error) => {
              toast.error("Error sending verification email: " + error.message);
              return thunkAPI.rejectWithValue(error.message);
            })
            .finally(() => {
              toast.loading(
                "Verification email sended. Please check your inbox.",
                {
                  duration: 1000,
                }
              );
              return thunkAPI.dispatch(setUser(user));
            });
          return userCredential;
        })
        .catch((error) => {
          console.error("Error registering user:", error);
          return thunkAPI.rejectWithValue(error.message);
        });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
