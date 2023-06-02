import React from 'react'
import ferrari from '../assets/ferrari.jpg'

export const Posts = () => {
  return (
    <div className="blogpost">
      <div className="blogimg">
      <img src={ferrari} />
      </div>
      <div className="blogtext">
      <h2>Ferrari never wins</h2>
        <p className="info">
          <a className="author"> Ved Vaghela</a>
          <time>2023-05-31 20:00</time>
        </p>
      <p className="summary">Charles Leclerc and Carlos Sainz were eighth and ninth fastest respectively in the first free practice session for the Spanish Grand Prix at the Barcelona-Catalunya Circuit. During the 60 minutes, the Scuderia did a back-to-back comparison between the SF-23 in its previous configuration in the hands of the Monegasque and the other car, driven by the Spaniard, featuring the updates.</p>
      </div>
    </div>
  )
}
