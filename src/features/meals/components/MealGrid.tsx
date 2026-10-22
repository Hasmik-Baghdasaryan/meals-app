import Card from "@/shared/components/Card";
import CardGrid from "@/shared/components/CardGrid";
import CardLink from "@/shared/components/CardLink";
import FavoriteButton from "@/features/favorites/components/FavoriteButton";
import { mealImageUrl } from "../mealImageUrl";

import type { MealGridProps } from "@/types/mealPropTypes";

import styles from "./MealGrid.module.css";

function MealGrid({ meals, category }: MealGridProps) {
  return (
    <CardGrid>
      {meals.map((meal) => {
        const mealCategory = meal.category ?? category ?? "";
        const details = [mealCategory, meal.area].filter(Boolean).join(" · ");

        return (
          <li key={meal.id} className={styles.item}>
            <CardLink
              to={`/category/${encodeURIComponent(mealCategory.toLowerCase())}/${meal.id}`}
            >
              <Card
                src={mealImageUrl(meal.thumb, "medium")}
                title={meal.name}
                description={details}
              />
            </CardLink>
            <div className={styles.favorite}>
              <FavoriteButton meal={{ ...meal, category: mealCategory }} />
            </div>
          </li>
        );
      })}
    </CardGrid>
  );
}

export default MealGrid;
