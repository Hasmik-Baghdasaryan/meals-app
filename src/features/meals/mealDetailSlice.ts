import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchMealDetails } from "@/features/meals/mealsService";
import type { MealDetailsRootState } from "@/types/meal";
import type { RootState } from "@/app/store";

export const getMealById = createAsyncThunk(
  "mealDetails/fetchById",
  (id: string, { signal }) => fetchMealDetails(id, signal),
  {
    condition: (id, { getState }) => {
      const { meal, status } = (getState() as RootState)
        .mealDetails as MealDetailsRootState;
      return !(meal?.id === id && status === "succeeded");
    },
  },
);

const initialState: MealDetailsRootState = {
  meal: null,
  status: "idle",
  error: null,
};

const mealDetailsSlice = createSlice({
  name: "mealDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMealById.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.meal = null;
      })
      .addCase(getMealById.fulfilled, (state, action) => {
        state.meal = action.payload;
        state.status = action.payload ? "succeeded" : "notFound";
      })
      .addCase(getMealById.rejected, (state, action) => {
        if (action.meta.aborted) return;
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const selectMeal = (state: RootState) => state.mealDetails.meal;
export const selectMealStatus = (state: RootState) => state.mealDetails.status;
export const selectMealError = (state: RootState) => state.mealDetails.error;

export default mealDetailsSlice.reducer;
