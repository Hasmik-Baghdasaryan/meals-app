import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  selectIsFavorite,
  toggleFavoriteAndSave,
} from "@/store/favorites/favoriteSelectors";

import type { FavoriteMeal } from "@/types/favorite/types";

import styles from "./FavoriteButton.module.css";

function FavoriteButton({ meal }: { meal: FavoriteMeal }) {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => selectIsFavorite(state, meal.id));

  return (
    <button
      type="button"
      aria-pressed={isFavorite}
      aria-label={`Favorite ${meal.name}`}
      onClick={() => dispatch(toggleFavoriteAndSave(meal))}
      className={styles.button}
    >
      <svg
        viewBox="0 0 24 24"
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    </button>
  );
}

export default FavoriteButton;
