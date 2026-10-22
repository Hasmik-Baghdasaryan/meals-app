import type { RootState } from "../store";

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectSearchResults = (state: RootState) => state.search.items;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectSearchError = (state: RootState) => state.search.error;
