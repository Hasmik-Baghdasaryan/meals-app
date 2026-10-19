import MealImage from "@/shared/components/MealImage";
import MealInfo from "./MealInfo";

import styles from "./MealHero.module.css";

function MealHero({ meal, children }) {
  return (
    <div className={styles.hero}>
      <MealImage src={meal.thumb} alt={meal.name} />
      <MealInfo meal={meal}>{children}</MealInfo>
    </div>
  );
}

export default MealHero;
