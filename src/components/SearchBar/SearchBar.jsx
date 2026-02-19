import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <form>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for book.."
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchBtn}>
        Search
      </button>
    </form>
  );
}
