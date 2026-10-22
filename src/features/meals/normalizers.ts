import type { MealBasics, MealDetails, RawMeal } from "@/types/meal";

import { type ingredient } from "@/types/meal";

const INGREDIENTS_COUNT = 20;

function cleanText(text: string) {
  return text.replace(/[\u25A0-\u25FF]/g, "").trim();
}

function parseMealIngredients(meal: RawMeal) {
  const ingredients: ingredient[] = [];

  for (let i = 1; i <= INGREDIENTS_COUNT; i++) {
    const name = meal[`strIngredient${i}`]?.trim();
    const measure = meal[`strMeasure${i}`]?.trim();

    if (name) ingredients.push({ name, measure: measure ?? "" });
  }

  return ingredients;
}

function parseMealInstructions(text: string) {
  return (text ?? "").split(/\r?\n/).map(cleanText).filter(Boolean);
}

export function normalizeMealBasics(meal: RawMeal): MealBasics {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    thumb: meal.strMealThumb,
    category: meal.strCategory,
    area: meal.strCountry || meal.strArea,
  };
}

export function normalizeMealDetails(meal: RawMeal): MealDetails {
  return {
    ...normalizeMealBasics(meal),
    ingredients: parseMealIngredients(meal),
    instructions: parseMealInstructions(meal.strInstructions || ""),
    tags: meal.strTags ? meal.strTags.split(",").map((tag: string) => tag.trim()) : [],
    source: meal.strSource || null,
    youtube: meal.strYoutube || null,
  };
}
