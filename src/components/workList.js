import React from 'react';
import WorkEntry from './workEntry'
import data from '../data/workHistory.json'
import '../css/workList.css'

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
      <div id="embedList">
        { spaces }
      </div>
    )
}
  
export default WorkList