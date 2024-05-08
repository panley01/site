import React, { useState } from 'react';
import '../css/workEntry.css'

function WorkEntry({entry}) {
  const [isShown, setIsShown] = useState(false)
  
  const startDate = new Date(entry.started * 1000)
  const endDate = new Date(entry.ended * 1000)
  const today = new Date()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <div
      id="embedHolder"
      onMouseEnter={() => {console.log("entry"); setIsShown(true)}}
      onMouseLeave={() => {console.log("exit"); setIsShown(false)}}
    >
      <img
        src={`${process.env.PUBLIC_URL}images/${entry.image}`}
        alt={`The company logo of the company ${entry.company}`}
        width="100"
        height="100"
        id="imageContainer"
      />
      <a href={entry.url ?? '#'}><h2>{entry.company}{' • '}{entry.title}</h2></a>
      <h3>{`${months[startDate.getMonth()]} ${startDate.getFullYear()} - ${((endDate > today) ? 'Current' : (months[endDate.getMonth()] + ' ' + endDate.getFullYear().toString()))}`}</h3>
      <div style={{opacity: `${isShown ? '1' : '0'}`, maxHeight: `${isShown ? '500px' : '0'}`}} id="textContainer">{entry.description}</div>
    </div>
  )
}

export default WorkEntry
