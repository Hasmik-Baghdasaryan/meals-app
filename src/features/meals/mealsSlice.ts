import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchMealsByCategory } from "@/features/meals/mealsService";
import type { RootState } from "@/app/store";
import type { MealsRootState } from "@/types/meal";

export const getMealsByCategory = createAsyncThunk(
  "meals/fetchByCategory",
  (category: string, { signal }) => fetchMealsByCategory(category, signal),
  {
    condition: (category, { getState }) => {
      const { category: loadedCategory, status } = (getState() as RootState)
        .meals as MealsRootState;
      return !(loadedCategory === category && status === "succeeded");
    },
  },
);

const initialState: MealsRootState = {
  category: null,
  items: [],
  status: "idle",
  error: null,
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMealsByCategory.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
        state.category = action.meta.arg;
        state.items = [];
      })
      .addCase(getMealsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getMealsByCategory.rejected, (state, action) => {
        if (action.meta.aborted) return;
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const selectMeals = (state: RootState) => state.meals.items;
export const selectMealsStatus = (state: RootState) => state.meals.status;
export const selectMealsError = (state: RootState) => state.meals.error;

export default mealsSlice.reducer;
