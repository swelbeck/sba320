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
    </div>
  );
}
