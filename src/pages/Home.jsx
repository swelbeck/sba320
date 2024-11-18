import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  getBookDetails,
  getBooksByGenre,
} from "../services/googleBooksAPI.mjs";
import BookCard from "../components/BookCard";
import BookSearchForm from "../components/BookSearchForm";

export default function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function fetchBooks() {
      try {
        const bookData = await getBookDetails(); 
        // console.log(bookData)
        setBooks(bookData);
      } catch (error) {
        console.error(error)
      }
    }
    fetchBooks();
  }, []);

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

