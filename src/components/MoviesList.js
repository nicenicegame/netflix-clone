import React from 'react'
import './MoviesList.css'

function MoviesList({ movies }) {
  return (
    <div className="movies-list">
      {movies && movies.map((movie) => <p>{movie.title}</p>)}
    </div>
  )
}

export default MoviesList
