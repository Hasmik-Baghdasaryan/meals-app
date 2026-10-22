import { useSelector } from "react-redux";

import MealGrid from "@/features/meals/components/MealGrid";
import BackToHome from "@/shared/components/BackToHome";
import Message from "@/shared/components/Message";
import Pagination from "@/shared/components/Pagination";
import PageTitle from "@/shared/components/PageTitle";

import { PAGE_SIZE } from "@/shared/constants";
import { usePagination } from "@/shared/hooks/usePagination";
import { selectFavorites } from "@/features/favorites/favoritesSlice";

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
    </section>
  );
}

export default FavoritesPage;
