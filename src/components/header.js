import React from 'react';
import '../css/header.css'
import sites from '../data/socials.json'

function Header() {
    const [currentSite, setCurrentSite] = React.useState(0);
    const [site, setSite] = React.useState(sites[0]); // is the default value
    
    const incrementCurrentSite = () => {
      if (currentSite < 2) {
        setCurrentSite(currentSite + 1);
      } else {
        // reset to 1 if reached the end
        setCurrentSite(1);
      }
    };
    
    return (
      <h1>
        <div
          id='header'
          onMouseEnter={() => {
            incrementCurrentSite();
            setSite(sites[currentSite]);
          }}
        >
          <h1 id='prefix'>{site.prefix}</h1><h1 id='main'>panley</h1><h1 id='suffix'>{site.suffix}</h1>
          <a href={site.link} target="_blank" rel="noreferrer">
          </a>
        </div>
      </h1>
    );
}

export default Header
