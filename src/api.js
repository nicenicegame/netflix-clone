import axios from 'axios'

const API_KEY = '9a6583e9565c76d0dea9ec534c5b1808'
const BASE_URL = 'https://api.themoviedb.org/3'
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
export const COVER_IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'

export const getMoviesData = () => {
  return axios
    .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then((response) => {
      return response.data
    })
}

export const getTopRatedMoviesData = () => {
  return axios
    .get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
    .then((response) => {
      return response.data
    })
}

export const getUpcomingMoviesData = () => {
  return axios
    .get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
    .then((response) => {
      return response.data
    })
}
