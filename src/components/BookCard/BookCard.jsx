import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} className={styles.bookCard}>
      <img
        src={book.formats["image/jpeg"] || "Missing Cover"}
        alt={book.title}
        className={styles.bookCover}
      />
      <section className={styles.info}>
        <h3 className={styles.bookTitle}>{book.title || "Unknown Title"}</h3>
        <p className={styles.author}>
          {book.authors?.map((a) => a.name).join(", ") || "Unknown Author"}
        </p>
      </section>
    </Link>
  );
}
