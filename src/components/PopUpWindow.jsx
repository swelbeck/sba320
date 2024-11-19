import { useContext } from "react";
import { CartContext } from "../contexts/BookPopUpContext";

export default function Cart() {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <div className={`cart ${isCartOpen ? "open" : ""}`}>
      <button className="close-button" onClick={() => setIsCartOpen(false)}>
        X
      </button>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((book, index) => (
          // console.log(book)
          <li key={index}>
            {book.book.title} - {book.book.authors}
          </li>
        ))}
      </ul>
    </div>
  );
}
