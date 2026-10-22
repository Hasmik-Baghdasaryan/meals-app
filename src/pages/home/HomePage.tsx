import CategoryList from "@/features/categories/components/categoriesList/CategoryList";
import Search from "@/features/search/components/search/Search";
import RandomMeal from "@/features/meals/components/randomMeal/RandomMeal";
import PageTitle from "@/components/pageTitle/PageTitle";

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
