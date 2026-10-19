import { useNavigate } from "react-router-dom";

import Button from "@/shared/components/Button";

import styles from "./Search.module.css";

function Search({ initialQuery = "" }) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = String(formData.get("q") ?? "").trim();

    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      key={initialQuery}
      className={styles.searchContainer}
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        name="q"
        defaultValue={initialQuery}
        aria-label="Search meals by name"
        placeholder="Search your next meal"
        className={styles.searchInput}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}

export default Search;
