import React, { useState } from 'react';
import '../css/workEntry.css'

function WorkEntry({entry}) {
    
  const [isShown, setIsShown] = useState(false)
  
  const startDate = new Date(entry.started)
  const endDate = new Date(entry.ended)
  const today = new Date()

  return (
    <div id="embedHolder" onMouseEnter={() => {console.log("entry"); setIsShown(true)}} onMouseLeave={() => {console.log("exit"); setIsShown(false)}}>
      <img
        src={`${process.env.PUBLIC_URL}images/${entry.image}`}
        width="100"
        height="100"
        alt=""
        style={{transform: `${isShown ? 'scale(1.5,1.5)' : 'scale(1,1)'}`, float: "left", margin: "0 15px 0 0", "transition-duration": "1s;"}}
      />
      <h2>{entry.company}{' • '}{entry.title}</h2>
      <h3>{`${startDate.toDateString()} - ${((endDate > today) ? 'Current' : endDate.toDateString())}`}</h3>
      <div>{entry.description}</div>
    </div>
  )
}

export default WorkEntry