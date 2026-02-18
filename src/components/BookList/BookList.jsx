import BookCard from "../BookCard/BookCard";
import styles from "./BookList.css";

export default function BookList({ books }) {
  if (!books || books.length === 0) {
    return <p>No books found.</p>;
  }
  return (
    <ul className={styles.bookList}>
      {books.map((book) => (
        <li key={book.id} className={styles.listItem}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
}
