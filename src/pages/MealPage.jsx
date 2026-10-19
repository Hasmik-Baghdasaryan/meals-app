import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import ContentByState from "@/shared/components/ContentByState";
import PageTitle from "@/shared/components/PageTitle";
import Ingredients from "@/features/meals/components/Ingredients";
import Instructions from "@/features/meals/components/Instructions";
import MealHero from "@/features/meals/components/MealHero";
import {
  getMealById,
  selectMeal,
  selectMealError,
  selectMealStatus,
} from "@/features/meals/mealDetailSlice";

import styles from "./MealPage.module.css";

function MealPage() {
  const { name, id } = useParams();
  const dispatch = useDispatch();
  const meal = useSelector(selectMeal);
  const status = useSelector(selectMealStatus);
  const error = useSelector(selectMealError);

  useEffect(() => {
    const request = dispatch(getMealById(id));
    return () => request.abort();
  }, [id, dispatch]);

  return (
    <>
      <PageTitle>{meal?.name ?? "Recipe"}</PageTitle>
      <article className={styles.page}>
        <Link to={`/category/${name}`} className={styles.back}>
          ← Back to {name}
        </Link>
        <ContentByState
          status={status}
          error={error}
          loadingText="Loading recipe…"
          notFoundText="We couldn’t find this meal."
        >
          {meal && (
            <>
              <MealHero meal={meal} />
              <div className={styles.content}>
                <Instructions instructions={meal.instructions} />
                <Ingredients ingredients={meal.ingredients} />
              </div>
            </>
          )}
        </ContentByState>
      </article>
    </>
  );
}

export default MealPage;
