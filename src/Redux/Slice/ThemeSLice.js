import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = { light: true };
const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    dark(state) {
      state.light = false;
    },
    light(state) {
      state.light = true;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const themeAction = themeSlice.actions;
