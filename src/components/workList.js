import React from 'react';
import WorkEntry from './workEntry'
import data from '../data/workHistory.json'
import projectsData from '../data/projects.json'

export function WorkList() {
    const spaces = (JSON.parse(await context.env.SITE_DATA.get('work'))).map((item) => {
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

export function ProjectsList() {
    const spaces = (JSON.parse(await context.env.SITE_DATA.get('projects'))).map((item) => {
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
