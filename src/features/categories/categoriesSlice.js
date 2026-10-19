import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchCategories } from "./categoriesService";

export const getMealsCategories = createAsyncThunk(
  "categories/fetchAll",
  (_, { signal }) => fetchCategories(signal),
  {
    condition: (_, { getState }) => {
      const { status } = getState().categories;
      return status !== "loading" && status !== "succeeded";
    },
  },
);

const initialState = {
  items: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
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

export const selectCategories = (state) => state.categories.items;
export const selectCategoriesStatus = (state) => state.categories.status;
export const selectCategoriesError = (state) => state.categories.error;
export const selectCategoryByName = (state, name) =>
  state.categories.items.find(
    (category) => category.name.toLowerCase() === name.toLowerCase(),
  );

export default categoriesSlice.reducer;
