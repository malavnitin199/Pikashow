import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadMovie: (state, action) => {
      state.info = action.payload;
    },
    removeMovie: (state) => {
      state.info = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;
