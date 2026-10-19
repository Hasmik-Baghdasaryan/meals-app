import styles from "./MealImage.module.css";

function MealImage({ src, alt }) {
  return (
    <div className={styles.imageWrap}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
}

export default MealImage;
