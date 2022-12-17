import React from 'react';
import WorkEntry from './workEntry'
import data from '../data/workHistory.json'

function workList() {
    const spaces = data.map(({ company, title, image, started, ended, description }) => {
        return (
          <WorkEntry
            entry={data}
          />
        )
    })
  
    return (
      <div className="workList">
        { spaces }
      </div>
    )
}
  
export default workList