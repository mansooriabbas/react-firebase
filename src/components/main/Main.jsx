import React from 'react'

export const Main = ({searchResults}) => {
  return (
    <main className="main-container">
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </main>
  )
}

export default Main;