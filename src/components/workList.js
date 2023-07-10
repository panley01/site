import React from 'react';
import WorkEntry from './workEntry'
import SocialEntry from './socialEntry'
import data from '../data/workHistory.json'
import projectsData from '../data/projects.json'
import socialsData from '../data/socials.json'

export function WorkList() {
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

export function ProjectsList() {
    const spaces = projectsData.map((item) => {
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

export function SocialsList() {
    const spaces = socialsData.map((item) => {
        return (
          <SocialEntry
            entry={item}
            key={item.site}
          />
        )
    })
  
    return (
      <div id="embedList">
        { spaces }
      </div>
    )
}

