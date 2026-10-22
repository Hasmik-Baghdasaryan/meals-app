import type { CardGridProps } from "@/types/propTypes";

import styles from "./CardGrid.module.css";

function CardGrid({ children }: CardGridProps) {
  return <ul className={styles.grid}>{children}</ul>;
}

export default CardGrid;
