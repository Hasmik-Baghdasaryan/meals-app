import type React from "react";
import styles from "./Main.module.css";

function Main({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
