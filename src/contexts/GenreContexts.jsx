import { createContext, useState } from "react";

export const GenreContext = createContext();

export default function GenreProvider({ children }) {
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <GenreContext.Provider value={{ selectedGenre, setSelectedGenre }}>
      {children}
    </GenreContext.Provider>
  );
}
