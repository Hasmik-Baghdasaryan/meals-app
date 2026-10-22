import type { RootState } from "../store";

export const selectMeal = (state: RootState) => state.mealDetails.meal;
export const selectMealStatus = (state: RootState) => state.mealDetails.status;
export const selectMealError = (state: RootState) => state.mealDetails.error;
