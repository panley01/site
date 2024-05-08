import { Fragment, useState } from 'react';
import '../css/header.css'
import sites from '../data/socials.json'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaReddit, FaSteam, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiHackerone } from 'react-icons/si'

const iconComponentMapping = {
    twitter: FaTwitter,
    discord: FaDiscord,
    github: FaGithub,
    instagram: FaInstagram,
    reddit: FaReddit,
    youtube: FaYoutube,
    steam: FaSteam,
    hackerone: SiHackerone,
    twitch: FaTwitch,
    linkedin: FaLinkedin,
    email: HiOutlineMail
};

function Header() {
    const [currentSiteIndex, setCurrentSiteIndex] = useState(0);
    const currentSite = sites[currentSiteIndex];
    const IconComponent = iconComponentMapping[currentSite.site] ?? Fragment;

    const incrementCurrentSite = (e) => {
      // Ignore transitions on properties other than opacity
      if (e.propertyName !== 'opacity') return;
      // Only change states when elements are fully invisible
      if (window.getComputedStyle(e.target).opacity !== '0') return;

      const maxIndex = sites.length - 1;
      // Resets to 0 if reached the end
      setCurrentSiteIndex((currentSiteIndex + 1) % maxIndex);
    };

    return (
      <div className="container">
        <h1 className="header">
          <a target="_blank" rel="noopener noreferrer" href={currentSite.link}>
            <span className="prefix" onTransitionEnd={incrementCurrentSite}>{currentSite.name_prefix}</span>
            panley
            <span className="suffix">{currentSite.name_suffix} <IconComponent /></span>
          </a>
        </h1>
      </div>
    );
}

export default Header
