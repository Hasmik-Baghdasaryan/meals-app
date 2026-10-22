import MealImage from "@/components/mealImage/MealImage";
import MealInfo from "./mealInfo/MealInfo";

import type { MealHeroProps } from "@/types/meal/props";

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
