import { get, toArray } from "@/shared/api/client";
import { normalizeMealBasics, normalizeMealDetails } from "./normalizers";

export async function fetchMealsByCategory(category: string, signal: AbortSignal) {
  const data = await get("filter.php", { c: category }, signal);
  return toArray(data.meals).map(normalizeMealBasics);
}

export async function fetchMealDetails(id: string, signal: AbortSignal) {
  const data = await get("lookup.php", { i: id }, signal);
  const [meal] = toArray(data.meals);
  return meal ? normalizeMealDetails(meal) : null;
}

export async function fetchMealByName(query: string, signal: AbortSignal) {
  const data = await get(`search.php?s=${query}`, {}, signal);
  return toArray(data.meals).map(normalizeMealBasics);
}

export async function fetchRandomMeal(signal: AbortSignal) {
  const data = await get("random.php", {}, signal);
  const [meal] = toArray(data.meals);
  return meal ? normalizeMealBasics(meal) : null;
}
