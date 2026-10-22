import type { StringOrNull } from "../common";

export interface RawMeal {
  idMeal: string;
  strMeal: string;
  strMealAlternate?: StringOrNull;
  strCategory?: StringOrNull;
  strArea?: StringOrNull;
  strCountry?: StringOrNull;
  strInstructions?: StringOrNull;
  strMealThumb?: StringOrNull;
  strTags?: StringOrNull;
  strYoutube?: StringOrNull;
  strSource?: StringOrNull;
  strImageSource?: StringOrNull;
  strCreativeCommonsConfirmed?: StringOrNull;
  dateModified?: StringOrNull;
  [key: `strIngredient${number}`]: StringOrNull | undefined;
  [key: `strMeasure${number}`]: StringOrNull | undefined;
}

export type MealsResponse = { meals: RawMeal[] | null };

export type MealBasics = {
  id: string;
  name: string;
  thumb: string;
  category: string;
  area: string;
};

export type Ingredient = {
  name: string;
  measure: string;
};

export type MealDetails = MealBasics & {
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  source: StringOrNull;
  youtube: StringOrNull;
};
