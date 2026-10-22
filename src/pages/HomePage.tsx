import CategoryList from "@/features/categories/components/CategoryList";
import Search from "@/features/search/components/Search";
import RandomMeal from "@/features/meals/components/RandomMeal";
import PageTitle from "@/shared/components/PageTitle";

import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <PageTitle />
      <h1 className={styles.title}>What are we cooking tonight?</h1>
      <p className={styles.text}>
        Browse recipes by category or search by name to find your next meal.
      </p>
      <Search />
      <CategoryList />
      <RandomMeal />
    </>
  );
}

export default HomePage;
