import type { AsyncState } from "../common";
import type { MealBasics } from "../meal/types";
import type { Category } from "./types";

export type CategoryItemProps = {
  category: Category;
};

export type CategoryDetailsProps = AsyncState & {
  name: string | undefined;
  meals: MealBasics[];
};
