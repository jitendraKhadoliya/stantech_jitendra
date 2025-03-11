import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  darkMode: boolean;
  favorites: number[];
}

const initialState: UIState = {
  darkMode: false,
  favorites: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const index = state.favorites.indexOf(action.payload);

      console.log(index, "index", action.payload, " action.payload");

      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { toggleDarkMode, toggleFavorite } = uiSlice.actions;
export default uiSlice.reducer;
