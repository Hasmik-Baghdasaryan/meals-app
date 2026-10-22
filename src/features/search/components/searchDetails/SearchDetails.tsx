import ContentByState from "@/components/contentByState/ContentByState";
import MealGrid from "@/components/mealGrid/MealGrid";
import Message from "@/components/message/Message";
import Pagination from "@/components/pagination/Pagination";
import { PAGE_SIZE } from "@/constants";
import { usePagination } from "@/hooks/usePagination";

import styles from "./SearchDetails.module.css";
import type { SearchDetailsProps } from "@/types/search/props";

function SearchDetails({ results, status, error, query }: SearchDetailsProps) {
  const { pageItems, page, totalPages, setPage } = usePagination(results, PAGE_SIZE);

  return (
    <>
      {query ? (
        <ContentByState
          status={status}
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

export default SearchDetails;
