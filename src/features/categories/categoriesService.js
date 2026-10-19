import { get, toArray } from "@/shared/api/client";

function normalizeCategory(category) {
  return {
    id: category.idCategory,
    name: category.strCategory,
    thumb: category.strCategoryThumb,
    description: (category.strCategoryDescription ?? "").replace(/\[\d+\]/g, "").trim(),
  };
}

export async function fetchCategories(signal) {
  const data = await get("categories.php", {}, signal);
  return toArray(data.categories).map(normalizeCategory);
}
