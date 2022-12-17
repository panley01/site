import React from 'react';
import '../css/header.css'
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
      <div><h1
        id='header'
        onMouseEnter={() => {
          incrementCurrentSite();
          setSite(sites[currentSite].site);
          setIcon(sites[currentSite].logo);
          setLink(sites[currentSite].link);
          setPrefix(sites[currentSite].name_prefix);
          setSuffix(sites[currentSite].name_suffix);
        }}
      >
        <h1 id='prefix'>{prefix}</h1><h1 id='main'>panley</h1><h1 id='suffix'>{suffix}</h1>
        <a href={link} target="_blank" rel="noreferrer">
        </a>
      </h1></div>
    );
    
    
}

export default Header