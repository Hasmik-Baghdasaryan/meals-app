import { Link } from "react-router-dom";

import type { CardLinkProps } from "@/types/propTypes";

import styles from "./CardLink.module.css";

function CardLink({ to, children }: CardLinkProps) {
  return (
    <Link className={styles.link} to={to}>
      {children}
    </Link>
  );
}

export default CardLink;
