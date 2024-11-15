export default function BookCard({ book }) {
  return (
    <div className="card">
      <h2>{book.title}</h2>
      <img src={book.imageLinks.thumbnail}></img>
      <p>{book.authors}</p>
    </div>
  );
}
