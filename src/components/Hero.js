import React from 'react'
import Icon from './Icon'
import './Hero.css'
import { IMAGE_PATH } from '../api'

function Hero({ heroMovie }) {
  return (
    <div className="hero">
      <img
        src={`${IMAGE_PATH}${heroMovie.backdrop_path}`}
        alt={heroMovie.title}
      />
      <div className="hero-text">
        <h1 className="hero-title">{heroMovie.title}</h1>
        <p className="hero-overview">{heroMovie.overview}</p>
        <div className="hero-btn">
          <button className="play-btn">
            <Icon iconClass="fa fa-play" />
            Play
          </button>
          <button className="info-btn">
            <Icon iconClass="fa fa-info-circle" />
            More Info
          </button>
        </div>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Hero
