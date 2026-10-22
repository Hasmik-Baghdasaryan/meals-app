import { configureStore } from "@reduxjs/toolkit";

import categories from "@/store/categories/categoriesSlice";
import meals from "@/store/meals/mealsSlice";
import mealDetails from "@/store/mealDetails/mealDetailSlice";
import search from "@/store/search/searchSlice";
import favorites from "@/store/favorites/favoritesSlice";
import { loadFavorites } from "@/features/favorites/favoritesStorage";

const store = configureStore({
  reducer: {
    categories,
    mealDetails,
    meals,
    search,
    favorites,
  },
  preloadedState: { favorites: { items: loadFavorites() } },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
