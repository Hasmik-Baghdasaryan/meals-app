import type { Category } from "@/types/category/types";
import type { RootState } from "../store";

export const selectCategories = (state: RootState) => state.categories.items;
export const selectCategoriesStatus = (state: RootState) => state.categories.status;
export const selectCategoriesError = (state: RootState) => state.categories.error;
export const selectCategoryByName = (state: RootState, name: string) =>
  state.categories.items.find(
    (category: Category) => category.name.toLowerCase() === name?.toLowerCase(),
  );
