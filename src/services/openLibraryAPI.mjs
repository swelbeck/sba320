import axios from "axios";

export const getBookLibraryDetails = async () => {
  //   const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const url = `http://openlibrary.org/subjects/love.json?`;

  try {
    const response = await axios.get(url);
    const bookResults = response.data.items;
    // console.log(bookResults);
    return bookResults;
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
};

getBookLibraryDetails();
