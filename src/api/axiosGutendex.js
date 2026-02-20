import axios from "axios";

const baseURL = "https://gutendex.com/books";

//book details, fetches info about a spesific book based on id
export const fetchBookDetails = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch book details");
  }
  return response.data;
};

// ueses axios instance to fetch data from /movie/popular endpoint
export const fetchBookByCategory = async (query) => {
  const response = await axios.get(`${baseURL}?Category=${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch books by category");
  }
  return response.data;
};

// search books, fetches data based on searchquery, if books are not found an Error occur
export const fetchSearchBooks = async (query) => {
  try {
    const response = await axios.get(`${baseURL}?search=${query}`);
    return response.data;
  } catch {
    throw new Error("Failed to find books");
  }
};
