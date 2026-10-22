import type { AsyncState } from "../common";
import type { Ingredient, MealBasics, MealDetails } from "./types";

export type MealGridProps = {
  meals: MealBasics[];
  category?: string;
};

export type MealHeroProps = {
  meal: MealDetails;
  children?: React.ReactNode;
};

export type MealInfoProps = {
  meal: MealDetails;
  children: React.ReactNode;
};

export type MealDetailViewProps = AsyncState & {
  name?: string;
  meal: MealDetails | null;
};

export type IngredientsProps = {
  ingredients: Ingredient[];
};

export type InstructionsProps = {
  instructions: string[];
};
