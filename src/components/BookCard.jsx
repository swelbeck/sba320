export default function BookCard({ book }) {
  return (
    <div className="card">
      <h2 className="card-title">{book.title}</h2>
      <img src={book.imageLinks.thumbnail} className="card-image"></img>
      <p className="card-author">{book.authors}</p>
      <button className="card-button">Learn More</button>
    </div>
  );
}
