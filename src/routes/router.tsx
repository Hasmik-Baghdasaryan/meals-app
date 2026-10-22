import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import CategoryPage from "@/pages/category/CategoryPage";
import MealPage from "@/pages/meal/MealPage";
import HomePage from "@/pages/home/HomePage";
import NotFoundPage from "@/pages/notFound/NotFoundPage";
import RouteError from "@/pages/routeError/RouterError";
import SearchPage from "@/pages/search/SearchPage";
import FavoritesPage from "@/pages/favorites/FavoritesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        errorElement: <RouteError />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "category/:name", element: <CategoryPage /> },
          { path: "category/:name/:id", element: <MealPage /> },
          { path: "search", element: <SearchPage /> },
          { path: "favorites", element: <FavoritesPage /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);

export default router;
