import type { ingredient, MealDetails } from "./meal";

export type IngredientsProps = {
  ingredients: ingredient[];
};

export type InstructionsProps = {
  instructions: string[];
};

export type MealGridProps = {
  meals: MealDetails[];
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
