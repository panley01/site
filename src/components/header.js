import React from 'react';
import '../css/workEntry.css'
import sites from '../data/socials.json'

function Header() {

    const [currentSite, setCurrentSite] = React.useState(0);
    
    const [site, setSite] = React.useState("none"); // is the default value
    const [icon, setIcon] = React.useState("");
    const [link, setLink] = React.useState("");
    const [prefix, setPrefix] = React.useState("");
    const [suffix, setSuffix] = React.useState("");
    
    const incrementCurrentSite = () => {
      if (currentSite < 2) {
        setCurrentSite(currentSite + 1);
      } else {
        // reset to 1 if reached the end
        setCurrentSite(1);
      }
    };
    
    return (
      <button
        onMouseOver={() => {
          incrementCurrentSite();
          setSite(sites[currentSite].site);
          setIcon(sites[currentSite].logo);
          setLink(sites[currentSite].link);
          setPrefix(sites[currentSite].name_prefix);
          setSuffix(sites[currentSite].name_suffix);
        }}
      >
        <a href={link} target="_blank" rel="noreferrer">
          {prefix}panley{suffix}
        </a>
      </button>
    );
    
    
}

export default Header