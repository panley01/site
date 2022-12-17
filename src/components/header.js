import React from 'react';
import '../css/header.css'
import sites from '../data/socials.json'
import { FaTwitter } from 'react-icons/fa'

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
      <div class="container">
        <h1 class="header"
          onMouseEnter={() => {
            incrementCurrentSite();
            setSite(sites[currentSite]);
          }}>
          <span class="prefix"><FaTwitter /> {site.name_prefix}</span>
            panley
          <span class="suffix">{site.name_suffix}</span>
        </h1>
      </div>
    );
}

export default Header
