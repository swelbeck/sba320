export default function BookCard({ book, onLearnMore }) {
  return (
    <div className="card">
      <h2 className="card-title">{book.title}</h2>
      <img
        src={book.imageLinks.thumbnail}
        alt={`${book.title} cover`}
        className="card-image"
      ></img>
      <p className="card-author">{book.authors.join(", ")}</p>
      <button className="card-button" onClick={onLearnMore}>
        Learn More
      </button>
    </div>
  );
}
