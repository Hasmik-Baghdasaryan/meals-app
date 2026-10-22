import MealImage from "@/shared/components/MealImage";
import MealInfo from "./MealInfo";

import type { MealHeroProps } from "@/types/mealPropTypes";

import styles from "./MealHero.module.css";

function MealHero({ meal, children }: MealHeroProps) {
  return (
    <div className={styles.hero}>
      <MealImage src={meal.thumb} alt={meal.name} />
      <MealInfo meal={meal}>{children}</MealInfo>
    </div>
  );
}

export default MealHero;
