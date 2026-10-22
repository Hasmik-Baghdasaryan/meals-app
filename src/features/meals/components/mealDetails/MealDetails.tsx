import { Link } from "react-router-dom";

import ContentByState from "@/components/contentByState/ContentByState";
import MealHero from "./mealHero/MealHero";
import Instructions from "./instructions/Instructions";
import Ingredients from "./ingredients/Ingredients";
import type { MealDetailViewProps } from "@/types/meal/props";

import styles from "./Mealdetails.module.css";

function MealDetails({ meal, name, status, error }: MealDetailViewProps) {
  return (
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
  );
}

export default MealDetails;
