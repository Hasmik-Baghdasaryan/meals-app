import { get, toArray } from "@/utils/client";
import type { Category, CategoryResponse, RawCategory } from "@/types/category/types";

function normalizeCategory(category: RawCategory) {
  return {
    id: category.idCategory || "",
    name: category.strCategory || "",
    thumb: category.strCategoryThumb || "",
    description: (category.strCategoryDescription ?? "").replace(/\[\d+\]/g, "").trim(),
  };
}

export async function fetchCategories(signal: AbortSignal): Promise<Category[]> {
  const data = await get<CategoryResponse>("categories.php", {}, signal);
  return toArray(data.categories).map(normalizeCategory);
}
