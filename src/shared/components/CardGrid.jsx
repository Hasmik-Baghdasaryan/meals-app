import styles from "./CardGrid.module.css";

function CardGrid({ children }) {
  return <ul className={styles.grid}>{children}</ul>;
}

export default CardGrid;
