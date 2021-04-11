import React from 'react'
import './Header.css'
import Icon from './Icon'

function Header() {
  return (
    <header>
      <div className="navbar-left">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="netflix logo"
        />
        <div className="links">
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
        </div>
      </div>
      <div className="navbar-right">
        <Icon iconClass="fas fa-search" />
        <Icon iconClass="fas fa-gift" />
        <Icon iconClass="fas fa-bell" />
        <Icon iconClass="fas fa-user-circle" />
      </div>
    </header>
  )
}

export default Header
