import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchMealsByCategory } from "@/features/meals/mealsService";

export const getMealsByCategory = createAsyncThunk(
  "meals/fetchByCategory",
  (category, { signal }) => fetchMealsByCategory(category, signal),
  {
    condition: (category, { getState }) => {
      const { category: loadedCategory, status } = getState().meals;
      return !(loadedCategory === category && status === "succeeded");
    },
  },
);

const initialState = {
  category: null,
  items: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
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

export const selectMeals = (state) => state.meals.items;
export const selectMealsStatus = (state) => state.meals.status;
export const selectMealsError = (state) => state.meals.error;

export default mealsSlice.reducer;
