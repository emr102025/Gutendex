import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import SearchBar from "../SearchBar/SearchBar";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";
import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header style={{ background: "black" }}>
      <Link to="/">
        <h1>Gutendex</h1>
      </Link>
      <nav>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <div className={styles.categoryMenu}>
          <CategoryMenu />
        </div>
        <button>Favorites</button>
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
