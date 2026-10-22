import type { MealImageProps } from "@/types/propTypes";
import styles from "./MealImage.module.css";

function MealImage({ src, alt }: MealImageProps) {
  if (!src) return null;
  return (
    <div className={styles.imageWrap}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
}

export default MealImage;
