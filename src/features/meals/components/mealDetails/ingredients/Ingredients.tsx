import type { IngredientsProps } from "@/types/meal/props";
import styles from "./Ingredients.module.css";

function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <section className={styles.ingredients}>
      <h2 className={styles.sectionTitle}>Ingredients</h2>
      <ul className={styles.ingredientList}>
        {ingredients?.map((ing, index) => (
          <li key={`${ing.name}-${index}`} className={styles.ingredient}>
            <span>{ing.name}</span>
            <span className={styles.measure}>{ing.measure}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Ingredients;
