import axios from "axios";

export const getBookDetails = async () => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&orderBy=newest&maxResults=10`;
  //   const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  // State to hold the book data.
  // const [books, setBooks] = useState(null);

  try {
    const response = await axios.get(url);
    const bookResults = response.data.items;
    // console.log(bookResults)
    return bookResults;
  } catch (error) {
    console.error("Error fetching book details:", error);
    // throw error;
  }
};
