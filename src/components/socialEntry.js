import React, { useState } from 'react';
import '../css/workEntry.css'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaReddit, FaSteam, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiHackerone } from 'react-icons/si'

function SocialEntry({entry}) {
  
    const iconMapping = {
        twitter: <FaTwitter />,
        discord: <FaDiscord />,
        github: <FaGithub />,
        instagram: <FaInstagram />,
        reddit: <FaReddit />,
        youtube: <FaYoutube />,
        steam: <FaSteam />,
        hackerone: <SiHackerone />,
        twitch: <FaTwitch />,
        linkedin: <FaLinkedin />,
        email: <HiOutlineMail />
    }
    
  const [isShown, setIsShown] = useState(false)
  
  const startDate = new Date(entry.started * 1000)
  const endDate = new Date(entry.ended * 1000)
  const today = new Date()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <div id="embedHolder" onMouseEnter={() => {console.log("entry"); setIsShown(true)}} onMouseLeave={() => {console.log("exit"); setIsShown(false)}}>
      <a href={entry.link}><h2>{((iconMapping[entry.site]) ? iconMapping[entry.site] : '')}{'  '}{entry.site}{' • '}{entry.name_prefix}{'panley'}{entry.name_suffix}</h2></a>
    </div>
  )
}

export default SocialEntry
