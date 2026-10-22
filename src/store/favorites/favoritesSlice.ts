import { createSlice } from "@reduxjs/toolkit";
import type { FavoritesState } from "@/types/favorite/state";

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const { id, name, thumb, category, area } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);

      if (index === -1) state.items.push({ id, name, thumb, category, area });
      else state.items.splice(index, 1);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
