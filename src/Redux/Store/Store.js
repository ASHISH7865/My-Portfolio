import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "../Slice/ThemeSLice";

const store = configureStore({
  reducer: { theme: themeReducer },
});

export default store;
