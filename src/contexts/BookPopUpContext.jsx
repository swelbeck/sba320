import React, { useState, createContext, useContext } from "react";
import Cart from "../components/PopUpWindow";
import { Product } from "../components/BookPopUpDetail";
import "./Cart.css"; // Import your CSS file 

// Create a Cart Context
export const CartContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    // console.log(cartItems)
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, isCartOpen, setIsCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};



export const CartToggleButton = () => {
  const { setIsCartOpen } = useContext(CartContext);

  return <button onClick={() => setIsCartOpen(true)}>Cart</button>;
};

// export default CartApp;
