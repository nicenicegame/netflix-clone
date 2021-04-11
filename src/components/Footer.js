import React from 'react'
import Icon from './Icon'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-icon">
          <Icon iconClass="fab fa-facebook-square fa-2x" />
          <Icon iconClass="fab fa-instagram fa-2x" />
          <Icon iconClass="fab fa-twitter fa-2x" />
          <Icon iconClass="fab fa-youtube fa-2x" />
        </div>
        <div className="footer-links">
          <p>Audio and Subtitles</p>
          <p>Audio Description</p>
          <p>Help Center</p>
          <p>Gift Cards</p>
          <p>Media Center</p>
          <p>Investor Relations</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Corperate Infomation</p>
          <p>Contact Us</p>
        </div>
        <button className="service-btn">Service Code</button>
        <p className="small">Netflix Clone by Tatpol Samakpong</p>
      </div>
    </footer>
  )
}

export default Footer
