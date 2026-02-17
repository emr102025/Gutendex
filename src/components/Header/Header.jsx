import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ background: "black" }}>
      <Link to="/">
        <h1>Gutendex</h1>
      </Link>
      <Link to="/search">Search</Link>
      <button>Favorites</button>
    </nav>
  );
}
