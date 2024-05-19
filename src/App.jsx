import { useEffect, useState } from "react";
import { searchMovie } from "./api";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await searchMovie(searchTerm);
      setSearchResults(results);
    };
    fetchData();
  }, [searchTerm]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = (e) => {
    setSearchTerm(input);
  };

  return (
    <main className="main-container">
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {(searchResults ?? []).map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
