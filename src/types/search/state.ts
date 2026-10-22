import type { AsyncState } from "../common";
import type { MealBasics } from "../meal/types";

export type SearchState = AsyncState & { query: string; items: MealBasics[] };
