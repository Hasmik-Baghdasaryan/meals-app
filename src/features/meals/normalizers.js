const INGREDIENTS_COUNT = 20;

function cleanText(text) {
  return text.replace(/[\u25A0-\u25FF]/g, "").trim();
}

function parseMealIngredients(meal) {
  const ingredients = [];

  for (let i = 1; i <= INGREDIENTS_COUNT; i++) {
    const name = meal[`strIngredient${i}`]?.trim();
    const measure = meal[`strMeasure${i}`]?.trim();

    if (name) ingredients.push({ name, measure: measure ?? "" });
  }

  return ingredients;
}

function parseMealInstructions(text) {
  return (text ?? "").split(/\r?\n/).map(cleanText).filter(Boolean);
}

export function normalizeMealBasics(meal) {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    thumb: meal.strMealThumb,
    category: meal.strCategory,
    area: meal.strCountry || meal.strArea,
  };
}

export function normalizeMealDetails(meal) {
  return {
    ...normalizeMealBasics(meal),
    ingredients: parseMealIngredients(meal),
    instructions: parseMealInstructions(meal.strInstructions),
    tags: meal.strTags ? meal.strTags.split(",").map((tag) => tag.trim()) : [],
    source: meal.strSource || null,
    youtube: meal.strYoutube || null,
  };
}
