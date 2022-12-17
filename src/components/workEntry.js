import React from 'react';
import '../css/workEntry.css'

function workEntry({entry}) {
  const startDate = new Date(entry.started)
  const endDate = new Date(entry.ended)
  const today = new Date()
  return (
    <div id="embedHolder">
      <img
        src={`${process.env.PUBLIC_URL}images/${entry.image}`}
        width="300"
        height="300"
        alt=""
        id="workImage"
      />
      <h2>{entry.company}{' • '}{entry.title}</h2>
      <h3>{`${startDate.toDateString().split().slice(1).join(' ')} - ${((endDate > today) ? 'Current' : endDate.toDateString().split().slice(1).join(' '))}`}</h3>
      <div>{entry.description}</div>
    </div>
  )
}

export default workEntry