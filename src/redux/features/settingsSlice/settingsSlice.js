import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollPosition: 0,
  theme: "dark",
};

const settingsSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    getScrolledPosition: (state, { payload }) => {
      state.scrollPosition = payload;
    },
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { getScrolledPosition, setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
