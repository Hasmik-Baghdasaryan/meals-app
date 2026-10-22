import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import Search from "@/features/search/components/search/Search";
import PageTitle from "@/components/pageTitle/PageTitle";
import SearchDetails from "@/features/search/components/searchDetails/SearchDetails";
import { searchMeals } from "@/store/search/searchSlice";
import {
  selectSearchError,
  selectSearchQuery,
  selectSearchResults,
  selectSearchStatus,
} from "@/store/search/searchSelectors";

import styles from "./SearchPage.module.css";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const dispatch = useAppDispatch();
  const results = useAppSelector(selectSearchResults);
  const status = useAppSelector(selectSearchStatus);
  const error = useAppSelector(selectSearchError);
  const loadedQuery = useAppSelector(selectSearchQuery);

  useEffect(() => {
    if (!query) return;

    const request = dispatch(searchMeals(query));

    return () => request.abort();
  }, [query, dispatch]);

  const currentStatus = loadedQuery === query ? status : "loading";

  return (
    <>
      <PageTitle>{query ? `Search: ${query}` : "Search"}</PageTitle>
      <Search initialQuery={query} />
      <h1 className={styles.title}>Search results</h1>
      <SearchDetails
        query={query}
        results={results}
        status={currentStatus}
        error={error}
      />
    </>
  );
}

export default SearchPage;
