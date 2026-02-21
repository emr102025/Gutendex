import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import SearchBar from "../SearchBar/SearchBar";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";
import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.Gutendex}>GUTENDEX</h1>
      </Link>

      <div className={styles.searchBar}>
        <SearchBar />
      </div>

      <nav className={styles.navBar}>
        <div className={styles.categoryMenu}>
          <CategoryMenu />
        </div>
        <button className={styles.favorites}>Favorites</button>
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
