import React from "react";
import "./Main.css";

export const Main = ({ searchResults }) => {
  return (
    <main className="main-container">
      <ul className="card-container">
        {searchResults &&
          searchResults.map((movie) => (
            <li className="card" key={movie.imdbID}>
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
