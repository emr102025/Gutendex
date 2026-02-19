import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <nav style={{ background: "black" }}>
      <Link to="/">
        <h1>Gutendex</h1>
      </Link>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <button>Favorites</button>
      <div className={styles.categoryMenu}>
        <CategoryMenu />
      </div>
    </nav>
  );
}
