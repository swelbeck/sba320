import { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import {
  getBookDetails,
  getBooksByGenre,
  getBooksBySearch,
  getBooksBySearchAndGenre,
} from "../services/googleBooksAPI.mjs";
import BookCard from "../components/BookCard";
import BookSearchForm from "../components/BookSearchForm";
import { GenreContext } from "../contexts/GenreContexts";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerms] = useState("");
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

  // console.log(books)
  return (
    <div className="Home">
      <h1>Books</h1>
      <BookSearchForm setSearchTerms={setSearchTerms} />
      <div className="book-cards">
        {books.map((book) => (
          <BookCard book={book.volumeInfo} key={book.id} />
        ))}
      </div>
    </div>
  );
}
