import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardGrid from "@/shared/components/CardGrid";
import ContentByState from "@/shared/components/ContentByState";
import {
  getMealsCategories,
  selectCategories,
  selectCategoriesError,
  selectCategoriesStatus,
} from "../categoriesSlice";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const dispatch = useDispatch();
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
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryItem category={category} />
          </li>
        ))}
      </CardGrid>
    </ContentByState>
  );
}

export default CategoryList;
