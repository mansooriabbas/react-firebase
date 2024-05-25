import React, { useState } from "react";
import "./Main.css";

export const Main = ({ searchResults, titleResult, handleTitleSearch }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieClick = (imdbID) => {
    setSelectedMovieId(imdbID);
    handleTitleSearch(imdbID);
  };

  return (
    <main className="main-container">
      <ul className="card-container">
        {searchResults &&
          searchResults.map((movie) => (
            <li
              onClick={() => handleMovieClick(movie.imdbID)}
              className="card"
              key={movie.imdbID}
            >
              {selectedMovieId === movie.imdbID && titleResult && (
                <p>{titleResult.Plot}</p>
              )}
              <div className="title-container">
                <p>
                  <strong>Title: </strong>
                  {movie.Title}
                </p>
                <p>
                  <strong>Release date: </strong>
                  {movie.Year}
                </p>
              </div>
              <div className="img-container">
                {<img src={movie.Poster} alt="movie" />}
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Main;
