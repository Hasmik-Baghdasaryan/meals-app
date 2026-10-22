import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchMealDetails } from "@/services/mealsService";
import type { MealDetailsState } from "@/types/meal/state";
import type { RootState } from "@/store/store";

export const getMealById = createAsyncThunk(
  "mealDetails/fetchById",
  (id: string, { signal }) => fetchMealDetails(id, signal),
  {
    condition: (id, { getState }) => {
      const { meal, status } = (getState() as RootState).mealDetails as MealDetailsState;
      return !(meal?.id === id && status === "succeeded");
    },
  },
);

const initialState: MealDetailsState = {
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

export default mealDetailsSlice.reducer;
