import type { AsyncState } from "../common";
import type { MealBasics } from "../meal/types";

export type SearchDetailsProps = AsyncState & {
  results: MealBasics[];
  query: string;
};
