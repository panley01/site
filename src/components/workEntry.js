import React, { useState } from 'react';
import '../css/workEntry.css'

function workEntry({entry}) {
    
  const [isShown, setIsShown] = useState(false)
  
  const startDate = new Date(entry.started)
  const endDate = new Date(entry.ended)
  const today = new Date()

  return (
    <div id="embedHolder" onMouseOver={() => setIsShown(!isShown)}>
      <img
        src={`${process.env.PUBLIC_URL}images/${entry.image}`}
        width={isShown ? 200 : 100}
        height={isShown ? 200 : 100}
        alt=""
        id="workImage"
      />
      <h2>{entry.company}{' • '}{entry.title}</h2>
      <h3>{`${startDate.toDateString()} - ${((endDate > today) ? 'Current' : endDate.toDateString())}`}</h3>
      <div>{entry.description}</div>
    </div>
  )
}

export default workEntry