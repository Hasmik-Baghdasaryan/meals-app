import type { MealBasics } from "../meal/types";

export type FavoriteMeal = Pick<
  MealBasics,
  "id" | "name" | "thumb" | "category" | "area"
>;
