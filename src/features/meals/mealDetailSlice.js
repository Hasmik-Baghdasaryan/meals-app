import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchMealDetails } from "@/features/meals/mealsService";

export const getMealById = createAsyncThunk(
  "mealDetails/fetchById",
  (id, { signal }) => fetchMealDetails(id, signal),
  {
    condition: (id, { getState }) => {
      const { meal, status } = getState().mealDetails;
      return !(meal?.id === id && status === "succeeded");
    },
  },
);

const initialState = {
  meal: null,
  status: "idle", // "idle" | "loading" | "succeeded" | "notFound" | "failed"
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

export const selectMeal = (state) => state.mealDetails.meal;
export const selectMealStatus = (state) => state.mealDetails.status;
export const selectMealError = (state) => state.mealDetails.error;

export default mealDetailsSlice.reducer;
