import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

export default function BookDropdown() {
  const [genreOption, setGenreOptions] = useState("");
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
        Genres
        <select
          id="genre"
          name="genre"
          disabled={!genreList.length}
          value={genreOption}
          onChange={(e) => setGenreOptions(e.target.value)}
        >
          <option value="" />
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
