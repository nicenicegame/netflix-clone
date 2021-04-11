import { useEffect, useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import MoviesList from './components/MoviesList'

import { getMoviesData } from './api'
import './style.css'

function App() {
  const [heroMovie, setHeroMovie] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMoviesData().then((moviesData) => {
      const allMovies = moviesData.results
      setHeroMovie(allMovies[0])
      setMovies(allMovies.slice(1))
      console.log(moviesData)
    })
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero heroMovie={heroMovie} />
      <MoviesList movies={movies} />
    </div>
  )
}

export default App
