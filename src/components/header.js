import React from 'react';
import data from '../data/socials.json';

function Header() {
    
    let currentSocial = 0
  
    return (
      <div id="embedHolder" onMouseOver={() => {console.log(`Switch ${currentSocial}`); currentSocial = ((currentSocial < data.length) ? currentSocial + 1 : 0)}}>
        <img
          src={`${process.env.PUBLIC_URL}images/${data[currentSocial].logo}`}
          width="100"
          height="100"
          alt=""
          id="imageContainer"
        />
        <a href={data[currentSocial].link}><h2>{data[currentSocial].name_prefix}{'Panley'}{data[currentSocial].name_suffix}</h2></a>
      </div>
    )
  }
  
  export default Header