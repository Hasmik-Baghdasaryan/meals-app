import type { CardProps } from "@/types/componentProps";
import styles from "./Card.module.css";

function Card({ src, title, description, country }: CardProps) {
  return (
    <>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={src} alt={title} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description?.length ? <p className={styles.description}>{description}</p> : null}
        {country?.length ? <p className={styles.description}>{country}</p> : null}
      </div>
    </>
  );
}

export default Card;
