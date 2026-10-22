import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import { getMealsByCategory } from "@/store/meals/mealsSlice";
import {
  selectMeals,
  selectMealsError,
  selectMealsStatus,
} from "@/store/meals/mealsSelectors";
import { getMealsCategories } from "@/store/categories/categoriesSlice";
import { selectCategoryByName } from "@/store/categories/categorySelectors";

import type { RootState } from "@/store/store";

import CategoryDetails from "@/features/categories/components/categoryDetails/CategoryDetails";
import PageTitle from "@/components/pageTitle/PageTitle";

import styles from "./CategoryPage.module.css";

function CategoryPage() {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  const meals = useAppSelector(selectMeals);
  const status = useAppSelector(selectMealsStatus);
  const error = useAppSelector(selectMealsError);
  const category = useAppSelector((state: RootState) =>
    selectCategoryByName(state, name || ""),
  );

  useEffect(() => {
    dispatch(getMealsCategories());
  }, [dispatch]);

  useEffect(() => {
    const request = dispatch(getMealsByCategory(name || ""));
    return () => request.abort();
  }, [name, dispatch]);

  return (
    <>
      <PageTitle>{category?.name ?? name}</PageTitle>
      <h1 className={styles.title}>{name}</h1>
      {category?.description && (
        <p className={styles.description}>{category.description}</p>
      )}
      <CategoryDetails
        meals={meals}
        name={category?.name ?? name}
        status={status}
        error={error}
      />
    </>
  );
}

export default CategoryPage;
