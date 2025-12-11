import { createAsyncThunk } from "@reduxjs/toolkit";

// Firebase
// Firebase configuration
import { firebaseConfig } from "../config.js";
import { initializeApp } from "firebase/app";
// Firebase Modules
import {
  getDatabase,
  ref,
  set,
  onValue,
  get,
  update,
  query,
  orderByChild,
  startAt,
  endAt,
} from "firebase/database";

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

      console.log("Filter state in thunk:", thunkAPI.getState().nannies.filter);
      let nanniesRef = ref(database, "nannies");
      let nanniesQuery = null;
      const filter = thunkAPI.getState().nannies.filter;
      switch (filter.key) {
        case "name":
          nanniesQuery = query(nanniesRef, orderByChild(filter.key));
          break;
        case "price_per_hour":
          if (filter.value === "lt10") {
            nanniesQuery = query(
              nanniesRef,
              orderByChild(filter.key),
              endAt(10)
            );
          } else if (filter.value === "gt10") {
            nanniesQuery = query(
              nanniesRef,
              orderByChild(filter.key),
              startAt(10)
            );
          }

          break;
        case "rating":
          if (filter.value === "popular") {
            nanniesQuery = query(
              nanniesRef,
              orderByChild(filter.key),
              startAt(4)
            );
          } else if (filter.value === "notpopular") {
            nanniesQuery = query(
              nanniesRef,
              orderByChild(filter.key),
              endAt(4)
            );
          }
          break;

        default:
          nanniesQuery = nanniesRef;
          break;
      }
      console.log("Constructed nanniesQuery:", nanniesQuery);
      onValue(
        nanniesQuery,
        (snapshot) => {
          const nanniesFilter = thunkAPI.getState().nannies.filter;
          if (nanniesFilter.key === "name" && nanniesFilter.value === "desc") {
            return thunkAPI.dispatch(setItems(snapshot.val().reverse()));
          } else {
            return thunkAPI.dispatch(setItems(snapshot.val()));
          }
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

      const appointmentsRef = ref(database, "appointments/" + nanoid());
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
  async ({ nannyIndex }, thunkAPI) => {
    try {
      const database = getDatabase(firebaseApp);
      const favoriteRef = ref(database, `nannies/${nannyIndex}`);

      const user = thunkAPI.getState().auth.user;
      const snapshot = await get(favoriteRef);
      if (snapshot.exists()) {
        const nannyData = snapshot.val();

        Object.keys(nannyData).forEach(async (key) => {
          if (key === "users") {
            // console.log("Key 'users' found with value:", nannyData[key]);

            const nannyFavoritedUsers = nannyData.users;
            // console.log(
            //   nannyIndex,
            //   ": Current favoritedUsers:",
            //   nannyFavoritedUsers
            // );
            const checkedFavoritedUser = nannyFavoritedUsers.includes(user.uid);
            const resultUsers = checkedFavoritedUser
              ? nannyFavoritedUsers.filter((uid) => uid !== user.uid)
              : [...nannyFavoritedUsers, user.uid];

            // console.log(
            // //   nannyIndex,
            // //   ": Resulting Users after toggle:",
            // //   resultUsers
            // );

            await update(favoriteRef, {
              users: resultUsers,
            }).catch((error) => {
              console.error("Error updating 'users':", error);
            });
          } else {
            set(favoriteRef, { ...nannyData, users: ["0"] }).catch((error) => {
              console.error("Error initializing 'users':", error);
            });
          }
        });

        toast.success("Favorite status updated successfully");

        return true;
      } else {
        toast.error("No data available");
        console.log("No data available at the specified reference.");
      }
    } catch (error) {
      console.error("Error toggling favorite status:", error);
      toast.error("Error updating favorite status: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
