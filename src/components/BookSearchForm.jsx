import BookDropdown from "./BookDropdown";

export default function BookSearchForm() {
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <input type="text" placeholder="Search here..." />
        </label>
        <BookDropdown />
      </form>
    </div>
  );
}
