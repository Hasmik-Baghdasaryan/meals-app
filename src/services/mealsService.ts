import { get, toArray } from "@/utils/client";
import { normalizeMealBasics, normalizeMealDetails } from "@/features/meals/normalizers";
import type { MealBasics, MealDetails, MealsResponse } from "@/types/meal/types";

export async function fetchMealsByCategory(
  category: string,
  signal: AbortSignal,
): Promise<MealBasics[]> {
  const data = await get<MealsResponse>("filter.php", { c: category }, signal);
  return toArray(data.meals).map(normalizeMealBasics);
}

export async function fetchMealDetails(
  id: string,
  signal: AbortSignal,
): Promise<MealDetails | null> {
  const data = await get<MealsResponse>("lookup.php", { i: id }, signal);
  const [meal] = toArray(data.meals);
  return meal ? normalizeMealDetails(meal) : null;
}

export async function fetchMealByName(
  query: string,
  signal: AbortSignal,
): Promise<MealBasics[]> {
  const data = await get<MealsResponse>(`search.php?s=${query}`, {}, signal);
  return toArray(data.meals).map(normalizeMealBasics);
}

export async function fetchRandomMeal(signal: AbortSignal): Promise<MealBasics | null> {
  const data = await get<MealsResponse>("random.php", {}, signal);
  const [meal] = toArray(data.meals);
  return meal ? normalizeMealBasics(meal) : null;
}
