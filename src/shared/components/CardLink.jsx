import { Link } from "react-router-dom";

import styles from "./CardLink.module.css";

function CardLink({ to, children }) {
  return (
    <Link className={styles.link} to={to}>
      {children}
    </Link>
  );
}

export default CardLink;
