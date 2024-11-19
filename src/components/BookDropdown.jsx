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

