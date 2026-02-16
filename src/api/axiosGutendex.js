import axios from "axios";

const baseURL = "https://gutendex.com/books";

//book details, fetches info about a spesific book based on id
export const fetchBookDetails = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};

// ueses axios instance to fetch data from /movie/popular endpoint
export const fetchBookByCategory = async (category) => {
  const response = await axios.get(`${baseURL}?Category${category}`);
  return response.data;
};

// search books, fetches data based on searchquery, if books are not found an Error occur
export const fetchSearchBooks = async (query) => {
  const response = await axios.get(`${baseURL}?Search${query}`);
  if (!response.ok) {
    throw new Error("Failed to find books");
  }
  return response.data;
};
