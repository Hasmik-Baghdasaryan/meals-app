import type { FavoriteMeal } from "@/types/favorite/types";
import type { AppDispatch, RootState } from "../store";
import { toggleFavorite } from "./favoritesSlice";
import { saveFavorites } from "@/features/favorites/favoritesStorage";

export const selectFavorites = (state: RootState) => state.favorites.items;
export const selectIsFavorite = (state: RootState, id: string) =>
  state.favorites.items.some((item: FavoriteMeal) => item.id === id);

export const toggleFavoriteAndSave =
  (meal: FavoriteMeal) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(toggleFavorite(meal));
    saveFavorites(selectFavorites(getState()));
  };
