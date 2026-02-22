import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookList from "../../components/BookList/BookList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { fetchSearchBooks } from "../../api/axiosGutendex.js";
import styles from "../HomePage/HomePage.module.css";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  // get query from url
  const searchResult = new URLSearchParams(location.search).get("q");
  useEffect(() => {
    if (!searchResult) return;

    const getBooks = async () => {
      try {
        const data = await fetchSearchBooks(searchResult);
        setBooks(data.results); // Gutendex puts books inside "results"
      } catch (error) {
        console.error(error);
      }
    };

    getBooks();
  }, [searchResult]);

  return (
    <>
      <h2 className={styles.homePage}>Search results for "{searchResult}"</h2>
      <div className={styles.searchList}>
        <BookList books={books} />
      </div>
    </>
  );
}
