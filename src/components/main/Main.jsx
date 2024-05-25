import React, { useState, useEffect } from "react";
import "./Main.css";

export const Main = ({ searchResults, titleResult, handleTitleSearch }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = async (imdbID) => {
    await handleTitleSearch(imdbID);
    setSelectedMovieId(imdbID);
    setSelectedMovie(titleResult);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };
  useEffect(() => {
    if (selectedMovieId) {
      setSelectedMovie(titleResult);
    }
  }, [titleResult, selectedMovieId]);

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
              <div className="title-container">
                <strong>
                  <p>{movie.Title}</p>
                </strong>
              </div>

              <div className="img-container">
                {<img src={movie.Poster} alt="movie" />}
              </div>
            </li>
          ))}
      </ul>
      {isModalOpen && selectedMovie && (
        <Modal movie={selectedMovie} closeModal={closeModal} />
      )}
    </main>
  );
};

const Modal = ({ movie, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{movie.Title}</h2>
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <ul>
          {movie.Ratings &&
            movie.Ratings.map((rating, index) => (
              <li key={index}>
                <strong>{rating.Source}:</strong> {rating.Value}
              </li>
            ))}
        </ul>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Main;
