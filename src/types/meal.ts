import type { Status } from "./types";

export type StringOrNull = string | null;
export type StringOrNullOrUndefined = StringOrNull | undefined;

export interface MealBasics {
  id: string;
  name: string;
  thumb: StringOrNullOrUndefined;
  category: StringOrNullOrUndefined;
  area: StringOrNullOrUndefined;
}

export type ingredient = {
  name: string;
  measure: string;
};

export interface MealDetails extends MealBasics {
  ingredients: ingredient[];
  instructions: string[];
  tags: string[];
  source: StringOrNull;
  youtube: StringOrNull;
}

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
  [key: `strIngredient${number}`]: StringOrNullOrUndefined;
  [key: `strMeasure${number}`]: StringOrNullOrUndefined;
}

export type MealDetailsRootState = {
  meal: MealDetails | null;
  status: Status;
  error: string | null;
};

export type MealsRootState = {
  category: null | string;
  items: MealBasics[];
  status: Status;
  error: null | string;
};

export type SearchRootState = {
  query: string;
  items: MealBasics[];
  status: Status;
  error: null | string;
};
