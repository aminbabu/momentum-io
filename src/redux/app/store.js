import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settingsSlice/settingsSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
