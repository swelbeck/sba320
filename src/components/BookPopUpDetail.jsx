import { useContext } from "react";
import { CartContext } from "../contexts/BookPopUpContext";

export default function BookPopUpCard({ book }) {
  return (
    <div className="popup-card">
      <h2 className="popup-title">{book.title}</h2>
      <img src={book.imageLinks.thumbnail} className="card-image"></img>
      <p className="popup-author">{book.authors}</p>
      <p className="popup-description">{book.description}</p>
      <p className="popup-publishedDate">{book.publishedDate}</p>
      <p className="popup-publisher">{book.publisher}</p>
      <p className="popup-categories">{book.categories}</p>
      <p className="popup-pageCount">{book.pageCount}</p>
      {/* <button className="card-button">Learn More</button> */}
    </div>
  );
}

export const Product = ({book}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{book.title}</h3>
      <p>${book.description}</p>
      <button onClick={() => addToCart({book})}>
        Add to Cart
      </button>
    </div>
  );
};

// export const Product = ({ id, name, price }) => {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>${price}</p>
//       <button onClick={() => addToCart({ id, name, price })}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };
