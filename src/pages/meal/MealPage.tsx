import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getMealById } from "@/store/mealDetails/mealDetailSlice";
import {
  selectMeal,
  selectMealError,
  selectMealStatus,
} from "@/store/mealDetails/mealDetailsSelectors";

import MealDetails from "@/features/meals/components/mealDetails/MealDetails";
import PageTitle from "@/components/pageTitle/PageTitle";

function MealPage() {
  const { name, id } = useParams();
  const dispatch = useAppDispatch();
  const meal = useAppSelector(selectMeal);
  const status = useAppSelector(selectMealStatus);
  const error = useAppSelector(selectMealError);

  useEffect(() => {
    const request = dispatch(getMealById(id || ""));
    return () => request.abort();
  }, [id, dispatch]);

  return (
    <>
      <PageTitle>{meal?.name ?? "Recipe"}</PageTitle>
      <MealDetails name={name} meal={meal} status={status} error={error} />
    </>
  );
}

export default MealPage;
