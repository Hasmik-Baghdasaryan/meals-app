import { configureStore } from "@reduxjs/toolkit";

import categories from "@/features/categories/categoriesSlice";
import meals from "@/features/meals/mealsSlice";
import mealDetails from "@/features/meals/mealDetailSlice";
import search from "@/features/meals/searchSlice";

const store = configureStore({
  reducer: {
    categories,
    mealDetails,
    meals,
    search,
  },
});

export default store;
