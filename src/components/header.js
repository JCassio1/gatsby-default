import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">  
    <div className="HeaderGroup">

      <Link to="/"><img src="https://smallimg.pngkey.com/png/small/2-28648_instagram-logo-creative-plants-png-transparent-background-transparent.png" width="30" /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">downloads</Link>
      <Link to="/workshops">workshops</Link>
      <Link to="/buy"><button>Courses</button></Link>

    </div>
    Header
  </div>
)

export default Header
