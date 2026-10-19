import { createSlice } from "@reduxjs/toolkit";
import { saveFavorites } from "./favoritesStorage";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: [] },
  reducers: {
    toggleFavorite(state, action) {
      const { id, name, thumb, category } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);

      if (index === -1) state.items.push({ id, name, thumb, category });
      else state.items.splice(index, 1);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites.items;
export const selectIsFavorite = (state, id) =>
  state.favorites.items.some((item) => item.id === id);

export const toggleFavoriteAndSave = (meal) => (dispatch, getState) => {
  dispatch(toggleFavorite(meal));
  saveFavorites(selectFavorites(getState()));
};

export default favoritesSlice.reducer;
