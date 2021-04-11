import { useEffect, useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import MoviesList from './components/MoviesList'
import Footer from './components/Footer'

import {
  getMoviesData,
  getTopRatedMoviesData,
  getUpcomingMoviesData,
} from './api'
import './style.css'

function App() {
  const [heroMovie, setHeroMovie] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [latestMovies, setLatestMovies] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMoviesData().then((moviesData) => {
      const allMovies = moviesData.results
      setHeroMovie(allMovies[0])
      setMovies(allMovies.slice(1))
    })
    getTopRatedMoviesData().then((moviesData) => {
      const top = moviesData.results
      setTopMovies(top)
    })
    getUpcomingMoviesData().then((moviesData) => {
      const latest = moviesData.results
      setLatestMovies(latest)
    })
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero heroMovie={heroMovie} />
      <MoviesList
        movies={movies}
        topMovies={topMovies}
        latestMovies={latestMovies}
      />
      <Footer />
    </div>
  )
}

export default App
