import { useState, useEffect, useContext } from "react";
import { GenreContext } from "../contexts/GenreContexts";
import BookCard from "../components/BookCard";
import BookSearchForm from "../components/BookSearchForm";
import BookPopUpCard from "../components/BookPopUpDetail";
import {
  getBookDetails,
  getBooksByGenre,
  getBooksBySearch,
  getBooksBySearchAndGenre,
} from "../services/googleBooksAPI.mjs";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerms] = useState("");
  const [popupBook, setPopupBook] = useState(null);
  const { selectedGenre } = useContext(GenreContext);

  useEffect(() => {
    async function fetchBooks() {
      try {
        let bookData;

        if (searchTerm && selectedGenre) {
          // Filter display by search terms and genre
          bookData = await getBooksBySearchAndGenre(selectedGenre, searchTerm);
        } else if (searchTerm) {
          // Filter display by search terms
          bookData = await getBooksBySearch(searchTerm);
        } else if (selectedGenre) {
          // Filter display by search terms
          bookData = await getBooksByGenre(selectedGenre);
        } else {
          // Display default popular book list
          bookData = await getBookDetails();
        }

        setBooks(bookData);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    }
    fetchBooks();
  }, [selectedGenre, searchTerm]);

  function handlePopUpClose(e) {
    if (e.target.className === "popup-overlay") {
      setPopupBook(null);
    }
  }

  return (
    <div className="Home">
      <h1>Book Haven</h1>
      <BookSearchForm setSearchTerms={setSearchTerms} />
      <div className="book-cards">
        {books.map((book) => (
          <div key={book.id}>
            <BookCard
              book={book.volumeInfo}
              key={book.id}
              onLearnMore={() => setPopupBook(book.volumeInfo)}
            />
          </div>
        ))}
      </div>
      {popupBook && (
        <div className="popup-overlay" onClick={handlePopUpClose}>
          <div className="popup-content">
            <BookPopUpCard book={popupBook} />
            <button onClick={() => setPopupBook(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
