import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const personSlice = createSlice({
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
export const { addContent, removeContent } = personSlice.actions;

export default personSlice.reducer;
