import { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import {
  getBookDetails,
  getBooksByGenre,
} from "../services/googleBooksAPI.mjs";
import BookCard from "../components/BookCard";
import BookSearchForm from "../components/BookSearchForm";
import { GenreContext } from "../contexts/GenreContexts";

export default function Home() {
  const [books, setBooks] = useState([]);
  const { selectedGenre } = useContext(GenreContext);

  useEffect(() => {
    async function fetchBooks() {
      try {
        let bookData;
        if (selectedGenre) {
          bookData = await getBooksByGenre(selectedGenre);
        } else {
          bookData = await getBookDetails();
        }

        // console.log(bookData)
        setBooks(bookData);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    }
    fetchBooks();
  }, [selectedGenre]);

  // console.log(books)
  return (
    <div className="Home">
      <h1>Books</h1>
      <BookSearchForm />
      <div className="book-cards">
        {books.map((book) => (
          <BookCard book={book.volumeInfo} key={book.id} />
        ))}
      </div>
    </div>
  );
}
