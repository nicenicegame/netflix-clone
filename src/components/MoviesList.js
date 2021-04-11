import React from 'react'
import './MoviesList.css'
import { IMAGE_PATH } from '../api'

function MoviesList({ movies }) {
  return (
    <div className="movies-list">
      <div className="movies-row">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`${IMAGE_PATH}${movie.backdrop_path}`}
                alt={`pic of ${movie.title}`}
              />
            </div>
          ))}
      </div>
      <div className="movies-row">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`${IMAGE_PATH}${movie.backdrop_path}`}
                alt={`pic of ${movie.title}`}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default MoviesList
