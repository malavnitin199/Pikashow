import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addContent: (state, action) => {
      state.value += action.payload;
    },
    removeContent: (state) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContent, removeContent } = tvSlice.actions;

export default tvSlice.reducer;
