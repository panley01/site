import React from 'react';
import '../css/tagline.css'
import { FaDiscord } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Contact() {
    
    return (
      <div className="contactcontainer">
        <h1 className="contactheader">
            Contact me <a href='https://contact.panley01.workers.dev' className="contactheader">via Discord <FaDiscord /></a> or <a href='mailto:p@nley.contact?subject=Contact request from pa.nley.contact!' className="contactheader">send an email to p@nley.contact <HiOutlineMail /></a>
        </h1>
      </div>
    );
}

export default Contact
