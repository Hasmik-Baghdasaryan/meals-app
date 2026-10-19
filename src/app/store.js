import { configureStore } from "@reduxjs/toolkit";

import categories from "@/features/categories/categoriesSlice";
import meals from "@/features/meals/mealsSlice";
import mealDetails from "@/features/meals/mealDetailSlice";
import search from "@/features/meals/searchSlice";
import favorites from "@/features/favorites/favoritesSlice";
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

export default store;
