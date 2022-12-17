import React from 'react';
import '../css/workEntry.css'

function workHistory(props) {
  const { company, title, image, started, ended, description } = props
  const startDate = new Date(started)
  const endDate = new Date(ended)
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt=""
        id="workImage"
      />
      <h1>{company}</h1>
      <h2>{title}{'•'}{`${startDate.toDateString()} - ${endDate.toDateString()}`}</h2>
      <div>{description}</div>
    </div>
  )
}

export default workHistory