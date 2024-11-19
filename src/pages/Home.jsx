import { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";

import {
  getBookDetails,
  getBooksByGenre,
  getBooksBySearch,
  getBooksBySearchAndGenre,
} from "../services/googleBooksAPI.mjs";
import BookCard from "../components/BookCard";
import BookSearchForm from "../components/BookSearchForm";
import { GenreContext } from "../contexts/GenreContexts";
import BookPopUpCard from "../components/BookPopUpDetail";
import {CartProvider, CartToggleButton} from "../contexts/BookPopUpContext";
import { Product } from "../components/BookPopUpDetail";
import Cart from "../components/PopUpWindow";

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

  return (
    <div className="Home">
      <h1>Books</h1>
      <BookSearchForm setSearchTerms={setSearchTerms} />
      <div className="book-cards">
        {books.map((book) => (
          <div>
            <BookCard book={book.volumeInfo} key={book.id} />
          </div>
        ))}
      </div>
      {/* <CartApp /> */}
      <CartProvider>
        {books.map((book) => (
          <div>
            <CartToggleButton />
            <Product book={book.volumeInfo} key={book.id} />
            {/* <Product id={2} name="Product 2" price={20} /> */}
            <Cart />
          </div>
        ))}
      </CartProvider>
    </div>
  );
}
