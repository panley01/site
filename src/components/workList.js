import React from 'react';
import WorkEntry from './workEntry'

export async function WorkList() {
    const spaces = (JSON.parse(await process.env.SITE_DATA.get('work'))).map((item) => {
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

export async function ProjectsList() {
    const spaces = (JSON.parse(await process.env.SITE_DATA.get('projects'))).map((item) => {
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
