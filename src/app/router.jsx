import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import CategoryPage from "@/pages/CategoryPage";
import MealPage from "@/pages/MealPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import RouteError from "@/pages/RouterError";
import SearchPage from "@/pages/SearchPage";

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
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);

export default router;
