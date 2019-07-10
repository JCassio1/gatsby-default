import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>

    <div className="Hero">
      <div className="HeroGroup">
          <h1>Oiça as suas músicas preferidas</h1>
          <p>A qualquer hora.</p>
          <p>e em qualquer lugar</p>
          <Link to="/page-2/">Assistir Video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
