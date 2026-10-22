import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMealByName } from "@/services/mealsService";
import type { RootState } from "@/store/store";
import type { SearchState } from "@/types/search/state";

export const searchMeals = createAsyncThunk(
  "search/fetchByName",
  (query: string, { signal }) => fetchMealByName(query, signal),
  {
    condition: (query, { getState }) => {
      const { query: loadedQuery, status } = (getState() as RootState)
        .search as SearchState;
      return !(loadedQuery === query && status === "succeeded");
    },
  },
);

const initialState: SearchState = {
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

export default searchSlice.reducer;
