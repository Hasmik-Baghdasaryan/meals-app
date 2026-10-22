import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchMealsByCategory } from "@/services/mealsService";
import type { RootState } from "@/store/store";
import type { MealsState } from "@/types/meal/state";

export const getMealsByCategory = createAsyncThunk(
  "meals/fetchByCategory",
  (category: string, { signal }) => fetchMealsByCategory(category, signal),
  {
    condition: (category, { getState }) => {
      const { category: loadedCategory, status } = (getState() as RootState)
        .meals as MealsState;
      return !(loadedCategory === category && status === "succeeded");
    },
  },
);

const initialState: MealsState = {
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

export default mealsSlice.reducer;
