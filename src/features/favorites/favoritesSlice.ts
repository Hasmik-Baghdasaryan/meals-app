import { createSlice } from "@reduxjs/toolkit";
import { saveFavorites } from "./favoritesStorage";
import type { FavoriteMeal, FavoritesRootState } from "@/types/propTypes";
import type { AppDispatch, RootState } from "@/app/store";

const initialState: FavoritesRootState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
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
export const selectFavorites = (state: RootState) => state.favorites.items;
export const selectIsFavorite = (state: RootState, id: string) =>
  state.favorites.items.some((item) => item.id === id);

export const toggleFavoriteAndSave =
  (meal: FavoriteMeal) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(toggleFavorite(meal));
    saveFavorites(selectFavorites(getState()));
  };

export default favoritesSlice.reducer;
