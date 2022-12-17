import React from 'react';
import WorkEntry from './workEntry'
import data from '../data/workHistory.json'

function WorkList() {
    const spaces = data.map((item) => {
        return (
          <WorkEntry
            entry={item}
            key={item.company}
          />
        )
    })
  
    return (
      <div className="workList">
        { spaces }
      </div>
    )
}
  
export default WorkList