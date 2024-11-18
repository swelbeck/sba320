import BookDropdown from "./BookDropdown";

export default function BookSearchForm({ setSearchTerms }) {
  function handleSearch(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value.trim();
    console.log(searchValue);
    setSearchTerms(searchValue)
  }
  return (
    <div>
      <form onSubmit={handleSearch} action="">
        <label htmlFor="">
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search for a book here..."
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <BookDropdown />
    </div>
  );
}
