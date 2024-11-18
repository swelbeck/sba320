import BookDropdown from "./BookDropdown";

export default function BookSearchForm() {
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <input type="text" placeholder="Search here..." />
        </label>
        <button>Search</button>
      </form>
      <BookDropdown />
    </div>
  );
}
