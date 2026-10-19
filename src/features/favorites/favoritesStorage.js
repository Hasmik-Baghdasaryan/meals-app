const STORAGE_KEY = "cozy-kitchen:favorites";

export const loadFavorites = function () {
  try {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(items)) return [];

    return items.filter(
      (item) => typeof item?.id === "string" && typeof item?.name === "string",
    );
  } catch {
    return [];
  }
};

export const saveFavorites = function (items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    //catch block
  }
};
