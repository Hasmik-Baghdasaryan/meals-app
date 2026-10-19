import Card from "@/shared/components/Card";
import CardGrid from "@/shared/components/CardGrid";
import CardLink from "@/shared/components/CardLink";
import { mealImageUrl } from "../mealImageUrl";

function MealGrid({ meals, category }) {
  return (
    <CardGrid>
      {meals.map((meal) => {
        const mealCategory = (meal.category ?? category ?? "").toLowerCase();
        const details = [meal.category, meal.area].filter(Boolean).join(" · ");

        return (
          <li key={meal.id}>
            <CardLink to={`/category/${encodeURIComponent(mealCategory)}/${meal.id}`}>
              <Card
                src={mealImageUrl(meal.thumb, "medium")}
                title={meal.name}
                description={details}
              />
            </CardLink>
          </li>
        );
      })}
    </CardGrid>
  );
}

export default MealGrid;
