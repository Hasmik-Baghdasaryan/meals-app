import { get, toArray } from "@/shared/api/client";
import { normalizeMealBasics, normalizeMealDetails } from "./normalizers";

export async function fetchMealsByCategory(category, signal) {
  const data = await get("filter.php", { c: category }, signal);
  return toArray(data.meals).map(normalizeMealBasics);
}

export async function fetchMealDetails(id, signal) {
  const data = await get("lookup.php", { i: id }, signal);
  const [meal] = toArray(data.meals);
  return meal ? normalizeMealDetails(meal) : null;
}

export async function fetchMealByName(query, signal) {
  const data = await get(`search.php?s=${query}`, {}, signal);
  return toArray(data.meals).map(normalizeMealBasics);
}

export async function fetchRandomMeal(signal) {
  const data = await get("random.php", {}, signal);
  const [meal] = toArray(data.meals);
  return meal ? normalizeMealBasics(meal) : null;
}
