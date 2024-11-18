// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import { useContext } from "react";
import { GenreContext } from "../contexts/GenreContexts";

export default function BookDropdown() {
  const {selectedGenre, setSelectedGenre} = useContext(GenreContext);

  const genreList = [
    "Fiction",
    "Nonfiction",
    "Fantasy",
    "Science Fiction",
    "Biography",
    "History",
    "Mystery",
    "Romance",
    "Self-Help",
    "Children's Books",
  ];


  return (
    <form>
      <label htmlFor="genre">
        Genre: {" "}
        <select
          id="genre"
          name="genre"
          disabled={!genreList.length}
          value={selectedGenre}
          onChange={(e) => {
            setSelectedGenre(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="">Select a genre</option>
          {genreList.map((genre) => (
            <option value={genre} key={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}

// <DropdownButton id="genre-dropdown" title="Genre">
//   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
// </DropdownButton>
