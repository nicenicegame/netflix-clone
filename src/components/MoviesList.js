import React from 'react'
import './MoviesList.css'
import { COVER_IMAGE_PATH } from '../api'

function MoviesList({ movies, topMovies, latestMovies }) {
  return (
    <div className="movies-list">
      <div className="movies-row">
        <h3>Trending Now</h3>
        <div className="movies-slider">
          {movies &&
            movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`${COVER_IMAGE_PATH}${movie.backdrop_path}`}
                  alt={`pic of ${movie.title}`}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="movies-row">
        <h3>Top Rated</h3>
        <div className="movies-slider">
          {topMovies &&
            topMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`${COVER_IMAGE_PATH}${movie.backdrop_path}`}
                  alt={`pic of ${movie.title}`}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="movies-row">
        <h3>Latest</h3>
        <div className="movies-slider">
          {latestMovies &&
            latestMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`${COVER_IMAGE_PATH}${movie.poster_path}`}
                  alt={`pic of ${movie.title}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MoviesList
