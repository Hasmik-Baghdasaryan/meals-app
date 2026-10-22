import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMealByName } from "./mealsService";
import type { RootState } from "@/app/store";
import type { SearchRootState } from "@/types/meal";

export const searchMeals = createAsyncThunk(
  "search/fetchByName",
  (query: string, { signal }) => fetchMealByName(query, signal),
  {
    condition: (query, { getState }) => {
      const { query: loadedQuery, status } = (getState() as RootState)
        .search as SearchRootState;
      return !(loadedQuery === query && status === "succeeded");
    },
  },
);

const initialState: SearchRootState = {
  query: "",
  items: [],
  status: "idle",
  error: null,
};

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

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectSearchResults = (state: RootState) => state.search.items;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectSearchError = (state: RootState) => state.search.error;

export default searchSlice.reducer;
