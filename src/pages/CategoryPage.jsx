import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import MealGrid from "@/features/meals/components/MealGrid";
import ContentByState from "@/shared/components/ContentByState";
import Pagination from "@/shared/components/Pagination";
import PageTitle from "@/shared/components/PageTitle";
import {
  getMealsByCategory,
  selectMeals,
  selectMealsError,
  selectMealsStatus,
} from "@/features/meals/mealsSlice";
import {
  getMealsCategories,
  selectCategoryByName,
} from "@/features/categories/categoriesSlice";
import { usePagination } from "@/shared/hooks/usePagination";
import { PAGE_SIZE } from "@/shared/constants";

import styles from "./CategoryPage.module.css";

function CategoryPage() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const meals = useSelector(selectMeals);
  const status = useSelector(selectMealsStatus);
  const error = useSelector(selectMealsError);
  const category = useSelector((state) => selectCategoryByName(state, name));
  const { pageItems, page, totalPages, setPage } = usePagination(meals, PAGE_SIZE);

  useEffect(() => {
    dispatch(getMealsCategories());
  }, [dispatch]);

  useEffect(() => {
    const request = dispatch(getMealsByCategory(name));
    return () => request.abort();
  }, [name, dispatch]);

  return (
    <>
      <PageTitle>{category?.name ?? name}</PageTitle>
      <h1 className={styles.title}>{name}</h1>
      {category?.description && (
        <p className={styles.description}>{category.description}</p>
      )}
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

export default CategoryPage;
