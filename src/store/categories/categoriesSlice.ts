import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchCategories } from "@/services/categoriesService";
import type { CategoryRootState } from "@/types/category/types";
import type { RootState } from "@/store/store";

export const getMealsCategories = createAsyncThunk(
  "categories/fetchAll",
  (_, { signal }) => fetchCategories(signal),
  {
    condition: (_, { getState }) => {
      const { status } = (getState() as RootState).categories as CategoryRootState;
      return status !== "loading" && status !== "succeeded";
    },
  },
);

const initialState: CategoryRootState = {
  items: [],
  status: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMealsCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getMealsCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getMealsCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default categoriesSlice.reducer;
