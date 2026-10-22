import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MealGrid from "@/features/meals/components/MealGrid";
import Search from "@/features/search/components/Search";
import ContentByState from "@/shared/components/ContentByState";
import Pagination from "@/shared/components/Pagination";
import PageTitle from "@/shared/components/PageTitle";
import Message from "@/shared/components/Message";
import {
  searchMeals,
  selectSearchError,
  selectSearchQuery,
  selectSearchResults,
  selectSearchStatus,
} from "@/features/meals/searchSlice";
import { usePagination } from "@/shared/hooks/usePagination";
import { PAGE_SIZE } from "@/shared/constants";

import styles from "./SearchPage.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const dispatch = useAppDispatch();
  const results = useAppSelector(selectSearchResults);
  const status = useAppSelector(selectSearchStatus);
  const error = useAppSelector(selectSearchError);
  const loadedQuery = useAppSelector(selectSearchQuery);
  const { pageItems, page, totalPages, setPage } = usePagination(results, PAGE_SIZE);

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

      {query ? (
        <ContentByState
          status={currentStatus}
          error={error}
          isEmpty={results.length === 0}
          loadingText="Searching…"
          emptyText={`No meals found for “${query}”. Try another name or browse the categories.`}
        >
          <p className={styles.count}>
            {results.length} {results.length === 1 ? "meal" : "meals"} found for “{query}”
          </p>
          <MealGrid meals={pageItems} />
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </ContentByState>
      ) : (
        <Message text="Type a meal name to start searching." role="alert" />
      )}
    </>
  );
}

export default SearchPage;
