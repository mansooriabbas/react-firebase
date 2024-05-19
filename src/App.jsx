import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import { searchMovie } from "./api";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await searchMovie(searchTerm);
    setSearchResults(results);
  };

  return (
    <div className="app-container">
      <Navbar onSearch={handleSearch} />
      <Main searchResults={searchResults} />
    </div>
  );
}

export default App;