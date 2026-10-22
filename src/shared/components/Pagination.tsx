import type { PaginationProps } from "@/types/propTypes";
import styles from "./Pagination.module.css";

function getVisiblePages(page: number, totalPages: number) {
  const pagesToShow = [...new Set([1, page - 1, page, page + 1, totalPages])]
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b);

  const result: (number | null)[] = [];

  pagesToShow.forEach((p, index) => {
    const previous = pagesToShow[index - 1];

    if (previous !== undefined) {
      if (p - previous === 2) result.push(previous + 1);
      else if (p - previous > 2) result.push(null);
    }
    result.push(p);
  });

  return result;
}

function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        type="button"
        className={styles.button}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        ‹ Prev
      </button>

      <ul className={styles.pages}>
        {getVisiblePages(page, totalPages).map((item, index) =>
          item === null ? (
            <li key={`gap-${index}`} className={styles.gap} aria-hidden="true">
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                className={[styles.button, item === page && styles.active]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => onPageChange(item)}
                aria-label={`Page ${item}`}
                aria-current={item === page ? "page" : undefined}
              >
                {item}
              </button>
            </li>
          ),
        )}
      </ul>

      <button
        type="button"
        className={styles.button}
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next ›
      </button>
    </nav>
  );
}

export default Pagination;
