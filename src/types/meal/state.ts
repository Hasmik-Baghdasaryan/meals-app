import type { AsyncState } from "../common";
import type { MealBasics, MealDetails } from "./types";

export type MealsState = AsyncState & { category: string | null; items: MealBasics[] };
export type MealDetailsState = AsyncState & { meal: MealDetails | null };
