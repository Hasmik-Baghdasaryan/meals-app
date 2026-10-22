import { useSelector } from "react-redux";

import MealGrid from "@/components/mealGrid/MealGrid";
import BackToHome from "@/components/backToHome/BackToHome";
import Message from "@/components/message/Message";
import Pagination from "@/components/pagination/Pagination";
import PageTitle from "@/components/pageTitle/PageTitle";

import { PAGE_SIZE } from "@/constants";
import { usePagination } from "@/hooks/usePagination";
import { selectFavorites } from "@/store/favorites/favoriteSelectors";

function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  const { page, pageItems, totalPages, setPage } = usePagination(favorites, PAGE_SIZE);

  return (
    <section>
      <PageTitle>Favorites</PageTitle>
      <h1>Your favorite recipes</h1>
      {favorites.length === 0 ? (
        <>
          <Message
            text="No favorites yet. Tap the heart on any recipe to save it here."
            role="status"
          />
          <BackToHome label="Browse categories" />
        </>
      ) : (
        <>
          <MealGrid meals={pageItems} />
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
      x
    </section>
  );
}

export default FavoritesPage;
