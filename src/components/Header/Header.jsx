import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <nav style={{ background: "black" }}>
      <Link to="/">
        <h1>Gutendex</h1>
      </Link>
      <div>
        <SearchBar />
      </div>
      <button>Favorites</button>
      <CategoryMenu />
    </nav>
  );
}
