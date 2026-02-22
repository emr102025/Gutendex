import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { fetchBookDetails } from "../../api/axiosGutendex.js";

export default function DetailsPage() {
  const [book, setBook] = useState(null);
  const { id } = useParams(); // This is to get the book ID from the URL

  useEffect(() => {
    const getBook = async () => {
      try {
        const data = await fetchBookDetails(id);
        setBook(data); // Gutendex puts books inside "results"
      } catch (error) {
        console.error(error);
      }
    };

    getBook();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <article>
      <h1>{book.title}</h1>
      <img src={book.formats?.["image/jpeg"]} alt={book.title} />
      <p>
        <strong>Author:</strong> {book.authors?.[0]?.name}
      </p>
      <p>
        <strong>Downloads:</strong> {book.download_count}
      </p>
      <p>
        <strong>Category:</strong> {book.subjects?.join(", ")}
      </p>
      <p>
        <strong>Language:</strong> {book.languages?.join(", ")}
      </p>
      <p>
        <strong>Read online:</strong>{" "}
        <a
          href={book.formats?.["text/html"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Book
        </a>
      </p>

      <button>Add to Favorites</button>
    </article>
  );
}
