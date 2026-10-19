import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMealByName } from "./mealsService";

const initialState = {
  query: "",
  items: [],
  status: "idle",
  error: null,
};

export const searchMeals = createAsyncThunk(
  "search/fetchByName",
  (query, { signal }) => fetchMealByName(query, signal),
  {
    condition: (query, { getState }) => {
      const { query: loadedQuery, status } = getState().search;
      return !(loadedQuery === query && status === "succeeded");
    },
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMeals.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
        state.query = action.meta.arg;
        state.items = [];
      })
      .addCase(searchMeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(searchMeals.rejected, (state, action) => {
        if (action.meta.aborted) return;

        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const selectSearchQuery = (state) => state.search.query;
export const selectSearchResults = (state) => state.search.items;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchError = (state) => state.search.error;

export default searchSlice.reducer;
