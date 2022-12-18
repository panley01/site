import React from 'react';
import '../css/tagline.css'
import { FaDiscord } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Contact() {
    
    return (
      <div class="contactcontainer">
        <h1 class="contactheader">
            Contact me <a href='https://contact.panley01.workers.dev' class="contactheader">via Discord <FaDiscord /></a> or <a href='mailto:p@nley.contact?subject=Contact request from pa.nley.contact!' class="contactheader">send an email to p@nley.contact <HiOutlineMail /></a>
        </h1>
      </div>
    );
}

export default Contact
