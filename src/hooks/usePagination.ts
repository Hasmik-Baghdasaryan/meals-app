import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function usePagination<T>(items: T[], pageSize: number) {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  const rawPageParam = searchParams.get("page");
  const requestedPage = Number.parseInt(rawPageParam ?? "1", 10);
  const isValidNumber = !Number.isNaN(requestedPage);
  const page = !isValidNumber ? 1 : Math.min(Math.max(requestedPage, 1), totalPages);

  const pageItems = items.slice((page - 1) * pageSize, page * pageSize);

  const setPage = useCallback(
    (nextPage: number) => {
      setSearchParams((params) => {
        const next = new URLSearchParams(params);

        if (nextPage <= 1) {
          next.delete("page");
        } else {
          next.set("page", String(nextPage));
        }

        return next;
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [setSearchParams],
  );

  useEffect(() => {
    if (items.length === 0) return;
    if (rawPageParam !== null && !isValidNumber) {
      setPage(1);
      return;
    }

    if (requestedPage > totalPages) {
      setPage(totalPages);
      return;
    }

    if (requestedPage < 1 && rawPageParam !== null) {
      setPage(1);
    }
  }, [requestedPage, totalPages, rawPageParam, isValidNumber, setPage, items]);

  return { page, totalPages, pageItems, setPage };
}
