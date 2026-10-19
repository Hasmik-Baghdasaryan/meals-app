import { useSearchParams } from "react-router-dom";

export function usePagination(items, pageSize) {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  const requestedPage = Number.parseInt(searchParams.get("page"), 10);
  const page = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);

  const pageItems = items.slice((page - 1) * pageSize, page * pageSize);

  function setPage(nextPage) {
    setSearchParams((params) => {
      const next = new URLSearchParams(params);

      if (nextPage <= 1) next.delete("page");
      else next.set("page", String(nextPage));

      return next;
    });

    window.scrollTo({ top: 0 });
  }

  return { page, totalPages, pageItems, setPage };
}
