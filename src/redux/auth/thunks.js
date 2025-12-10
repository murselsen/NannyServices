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
import { getDatabase, ref, set } from "firebase/database";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const loginUser = createAsyncThunk(
  "auth/loginuser",
  async (credentials, thunkAPI) => {
    try {
      const auth = getAuth(firebaseApp);
      return signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Login successful");
          return thunkAPI.dispatch(setUser(user));
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Incorrect password. Please try again.");
          }
          if (error.code === "auth/invalid-credential ") {
            toast.error("Invalid credentials. Please check and try again.");
          }
          return thunkAPI.rejectWithValue(error.message);
        })
        .finally(() => {
          toast.loading("Logging in...", { duration: 2000 });
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

          thunkAPI.dispatch(loginUser(credentials));
        })
        .catch((error) => {
          if (error.code === "auth/too-many-requests") {
            toast.error("Too many requests. Please try again later.");
          }
          if (error.code === "auth/email-already-exists") {
            toast.error("Email already exists. Please use a different email.");
          }

          if (error.code === "auth/email-already-in-use") {
            toast.error("Email already in use. Please use a different email.");
          }

          if (error.code === "auth/invalid-email") {
            toast.error("Invalid email address. Please check and try again.");
          }

          console.error("Error registering user:", error);
          return thunkAPI.rejectWithValue(error.message);
        });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/currentuser",
  async (_, thunkAPI) => {
    try {
      const auth = getAuth(firebaseApp);
      const user = auth.currentUser;
      if (user) {
        toast.success("User is logged in");
        return thunkAPI.dispatch(setUser(user));
      } else {
        toast.error("No user is logged in");
        return thunkAPI.dispatch(setUser({}));
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
