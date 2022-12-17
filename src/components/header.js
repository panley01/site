import React, { useState } from 'react';
import data from '../data/socials.json'

function Tagline() {
    
  const [index, setIndex] = useState(0)

  return (
    <div id="embedHolder" onMouseOver={() => {console.log("statechange"); setIndex((index < data.length - 1) ? index + 1 : 0)}}>
      <h1>{' • '}{data[index]}</h1>
    </div>
  )
}

export default Tagline
