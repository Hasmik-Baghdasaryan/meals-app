import ContentByState from "@/components/contentByState/ContentByState";
import MealGrid from "@/components/mealGrid/MealGrid";
import Pagination from "@/components/pagination/Pagination";
import { usePagination } from "@/hooks/usePagination";
import { PAGE_SIZE } from "@/constants";
import type { CategoryDetailsProps } from "@/types/category/props";

function CategoryDetails({ name, status, error, meals }: CategoryDetailsProps) {
  const { pageItems, page, totalPages, setPage } = usePagination(meals, PAGE_SIZE);

  return (
    <>
      <ContentByState
        status={status}
        loadingText="Loading meals…"
        error={error}
        isEmpty={meals.length === 0}
        emptyText={`No meals found in “${name}”.`}
      >
        <MealGrid meals={pageItems} category={name} />
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </ContentByState>
    </>
  );
}

export default CategoryDetails;
