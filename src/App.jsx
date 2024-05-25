import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import { searchMovie, searchTitle } from "./api";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [titleResult, setTitleResult] = useState([])

  const handleSearch = async (searchTerm) => {
    const results = await searchMovie(searchTerm);
    setSearchResults(results);
  };

  const handleTitleSearch = async (id) => {
    const result = await searchTitle(id)
    setTitleResult(result)
  }

  return (
    <div className="app-container">
      <Navbar onSearch={handleSearch} titleResult={handleTitleSearch}  />
      <Main searchResults={searchResults} titleResult={titleResult} handleTitleSearch={handleTitleSearch}/>
    </div>
  );
}

export default App;