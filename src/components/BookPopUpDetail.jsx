export default function BookPopUpCard({ book }) {
  return (
    <div className="popup-card">
      <h2 className="popup-title">{book.title}</h2>
      <img src={book.imageLinks.thumbnail} className="card-image"></img>
      <p className="popup-author">
        <span className="popup-names">Authors: </span>
        {book.authors}
      </p>
      <p className="popup-description">
        <span className="popup-names">Description: </span>
        {book.description}
      </p>
      <p className="popup-publishedDate">
        <span className="popup-names">Date Published: </span>
        {book.publishedDate}
      </p>
      <p className="popup-publisher">
        <span className="popup-names">Publisher: </span>
        {book.publisher}
      </p>
      <p className="popup-categories">
        <span className="popup-names">Genre: </span>
        {book.categories}
      </p>
      <p className="popup-pageCount">
        <span className="popup-names">Page Count: </span>
        {book.pageCount}
      </p>
    </div>
  );
}
