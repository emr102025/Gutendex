import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

export default function Header() {
  return (
    <nav style={{ background: "black" }}>
      <Link to="/">
        <h1>Gutendex</h1>
      </Link>
      <button>Favorites</button>
      <CategoryMenu />
    </nav>
  );
}
