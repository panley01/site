import React from 'react';
import '../css/workEntry.css'

function workEntry({entry}) {
  const startDate = new Date(entry.started)
  const endDate = new Date(entry.ended)
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}images/${entry.image}`}
        width="300"
        height="300"
        alt=""
        id="workImage"
      />
      <h1>{entry.company}</h1>
      <h2>{entry.title}{'•'}{`${startDate.toDateString()} - ${endDate.toDateString()}`}</h2>
      <div>{entry.description}</div>
    </div>
  )
}

export default workEntry