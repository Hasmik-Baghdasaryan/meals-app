import { useEffect } from "react";
import { useSelector } from "react-redux";

import CardGrid from "@/shared/components/CardGrid";
import ContentByState from "@/shared/components/ContentByState";
import {
  getMealsCategories,
  selectCategories,
  selectCategoriesError,
  selectCategoriesStatus,
} from "../categoriesSlice";
import CategoryItem from "./CategoryItem";

import { useAppDispatch } from "@/hooks/hooks";

import type { Category } from "@/types/category";

function CategoryList() {
  const dispatch = useAppDispatch();
  const categories = useSelector(selectCategories);
  const status = useSelector(selectCategoriesStatus);
  const error = useSelector(selectCategoriesError);

  useEffect(() => {
    dispatch(getMealsCategories());
  }, [dispatch]);

  return (
    <ContentByState
      status={status}
      error={error}
      isEmpty={categories.length === 0}
      loadingText="Loading categories…"
      emptyText="No categories found."
    >
      <CardGrid>
        {categories.map((category: Category) => (
          <li key={category.id}>
            <CategoryItem category={category} />
          </li>
        ))}
      </CardGrid>
    </ContentByState>
  );
}

export default CategoryList;
