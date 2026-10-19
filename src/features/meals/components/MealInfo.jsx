import Actions from "./Actions";

import styles from "./MealInfo.module.css";

function MealInfo({ meal, children }) {
  const eyebrow = [meal.category, meal.area].filter(Boolean).join(" · ");

  return (
    <div className={styles.info}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h1 className={styles.title}>{meal.name}</h1>

      {meal.tags.length > 0 && (
        <ul className={styles.tags}>
          {meal.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.row}>
        <Actions youtube={meal.youtube} source={meal.source} />
        {children}
      </div>
    </div>
  );
}

export default MealInfo;
