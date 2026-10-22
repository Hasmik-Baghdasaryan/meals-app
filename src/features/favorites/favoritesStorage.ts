import type { FavoriteMeal } from "@/types/favorite/types";

const STORAGE_KEY = "cozy-kitchen:favorites";

export const loadFavorites = function () {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) return [];

    const items = JSON.parse(serialized);
    if (!Array.isArray(items)) return [];

    return items.filter(
      (item) => typeof item?.id === "string" && typeof item?.name === "string",
    );
  } catch {
    return [];
  }
};

export const saveFavorites = function (items: FavoriteMeal[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    //catch block
  }
};
