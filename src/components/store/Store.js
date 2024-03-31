import { configureStore } from "@reduxjs/toolkit";
import moveiReducer from "./reducer/MovieSlice";
import tvReducer from "./reducer/tvSlice";
import peronReducer from "./reducer/personSlice.jsx";
export const store = configureStore({
  reducer: {
    movie: moveiReducer,
    tv: tvReducer,
    person: peronReducer,
  },
});
