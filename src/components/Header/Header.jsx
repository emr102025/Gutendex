import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ background: "black" }}>
      <Link to="/">
        <h1>Gutendex</h1>
      </Link>
      <input
        type="text"
        value=""
        onChange={(e) => e.target.value}
        placeholder="Search for book.."
      />
      <button type="submit">Search</button>
      <button>Favorites</button>
    </nav>
  );
}
