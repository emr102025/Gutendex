import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <nav style={{ background: "black" }}>
      <Link to="/">
        <h1>Gutendex</h1>
      </Link>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for book.."
      />
      <button type="submit">Search</button>
      <button>Favorites</button>
      <CategoryMenu />
    </nav>
  );
}
