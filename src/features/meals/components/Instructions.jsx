import styles from "./Instructions.module.css";

function Instructions({ instructions }) {
  return (
    <section className={styles.instructions}>
      <h2 className={styles.sectionTitle}>Instructions</h2>
      <ol className={styles.steps}>
        {instructions?.map((item, index) => (
          <li key={index} className={styles.stepWrapper}>
            <span className={styles.step}>{index + 1}</span>
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Instructions;
