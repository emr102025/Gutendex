import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookCard from "../../components/BookCard/BookCard.jsx";
import BookList from "../../components/BookList/BookList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { fetchBookDetails } from "../../api/axiosGutendex.js";

export default function DetailsPage() {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  // get query from url
  const searchResult = new URLSearchParams(location.search).get("q");
  useEffect(() => {
    if (!searchResult) return;

    const getBooks = async () => {
      try {
        const data = await fetchBookDetails(searchResult);
        setBooks(data.results); // Gutendex puts books inside "results"
      } catch (error) {
        console.error(error);
      }
    };

    getBooks();
  }, [searchResult]);

  return (
    <>
      <h1>DetailsPage</h1>
    </>
  );
}
