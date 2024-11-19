import axios from "axios";

export const getBookDetails = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&orderBy=newest&maxResults=10`;

  try {
    const response = await axios.get(url);
    const bookResults = response.data.items;
    console.log(bookResults)
    return bookResults;
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
};

export const getBooksByGenre = async (genreId) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genreId}&orderBy=relevance&maxResults=10`;

  try {
    const response = await axios.get(url);
    const bookResults = response.data.items;
    // console.log(bookResults);
    return bookResults;
  } catch (error) {
    console.error("Error fetching books by genre:", error);
  }
};

export const getBooksBySearch = async (query) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&maxResults=10`;

  try {
    const response = await axios.get(url);
    const bookResults = response.data.items;
    // console.log(bookResults);
    return bookResults;
  } catch (error) {
    console.error("Error fetching books by genre:", error);
  }
};

export const getBooksBySearchAndGenre = async (genreId, query) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genreId}+${query}&orderBy=relevance&maxResults=10`;

  try {
    const response = await axios.get(url);
    const bookResults = response.data.items;
    console.log(bookResults);
    return bookResults;
  } catch (error) {
    console.error("Error filtering books by genre and search terms:", error);
  }
};

// getBooksBySearchAndGenre("fiction", "fall");
