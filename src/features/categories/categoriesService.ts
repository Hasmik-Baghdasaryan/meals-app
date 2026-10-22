import { get, toArray } from "@/shared/api/client";
import type { RawCategory } from "@/types/category";

function normalizeCategory(category: RawCategory) {
  return {
    id: category.idCategory || "",
    name: category.strCategory || "",
    thumb: category.strCategoryThumb || "",
    description: (category.strCategoryDescription ?? "").replace(/\[\d+\]/g, "").trim(),
  };
}

export async function fetchCategories(signal: AbortSignal) {
  const data = await get("categories.php", {}, signal);
  return toArray(data.categories).map(normalizeCategory);
}
