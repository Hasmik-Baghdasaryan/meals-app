import type { RootState } from "../store";

export const selectMeals = (state: RootState) => state.meals.items;
export const selectMealsStatus = (state: RootState) => state.meals.status;
export const selectMealsError = (state: RootState) => state.meals.error;
