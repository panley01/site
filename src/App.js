import './App.css';
import {WorkList,ProjectsList,SocialsList} from './components/workList.js'
import Header from './components/header'
// import Tagline from './components/taglines'
// import Contact from './components/contact';

import { FaGithub, FaCloudflare  } from 'react-icons/fa'
import DiscordProfile from "./components/discord_profiles/DiscordProfile.tsx";

const discordUser = {
  "id": "249287049482338305",
  "username": "panley",
  "global_name": "Panley",
  "avatar": "c1b1d08abbc41dbe041a0ea31a512963",
  "banner": "3f59214d449b53c9d834ae3fe4885863",
  "discriminator": "0",
  "public_flags": 4588096,
  "flags": 4588128,
  "theme_colors": [787989, 2958153],
  "bio": "I make things on Discord for a living.\n\nHit me up on Discord!",
  "locale": "en-GB",
  "mfa_enabled": true,
  "premium_type": 2,
  "avatar_decoration": null,
  "verified": true,
  "theme": "light",
}

function App() {
  console.log(window.location.href)
  const isParodySite = (new URL(window.location.href)).hostname != 'pa.nley.contact'
  console.log(isParodySite)
  
  let audio = new Audio("/bonzi.mp3")

  const start = () => {
    audio.play()
  }
  return (
    <div className="App" onClick={((isParodySite) ? start : undefined)}>
      <img style={{width: '100vw'}} alt={'A white and black background seperated horizontally by a wavy line, white on top black on bottom. On the white section is the text: "Hi, I\'m".'} src={((isParodySite) ? `${process.env.PUBLIC_URL}/awfulaibanner.jpg` : `${process.env.PUBLIC_URL}/wave.svg`)} />
      <Header />
      <div className='textcontainer'>
        <div>
          <p style={{ color: 'white' }}>{((isParodySite) ? 'Panley-40: An Acid-Reducing Medication Panley-40 is a medication that primarily treats acid-related issues in the stomach and intestines. It contains the active ingredient pantoprazole, which works by reducing the amount of acid produced in your stomach. Common Uses of Panley-40: Peptic ulcer disease, Acid reflux (GERD), Heartburn. How Panley-40 Works, Pantoprazole, the active ingredient in Panley-40, blocks the production of acid in your stomach. This helps to relieve symptoms and promote healing of damaged tissues. Important Note: While I\'ve provided general information, it\'s crucial to consult with a healthcare professional for personalized advice regarding Panley-40 or any medication. They can provide specific guidance based on your medical history and condition. Would you like to know more about the side effects, precautions, or how to take Panley-40?' : 'Hey there, I’m Panley! I lead a team of veteran developers with years of experience bringing apps to life on Discord! I’ve worked with all sorts of brands in collaboration with Discord to bring rich experiences to the platform. I’ve successfully worked with strategic partners for several important brand moments led by Discord. I consistently bring high quality applications to life on Discord, bringing meaningful ways for your fans to engage with your brand & convert into potential customers. I aim to make your ideas into a strong reality. Thanks to my dedicated i18n and QA teams, I can help you launch across regions bug-free. My standard stack runs on Cloudflare for infinite scalability - no downtime! If you\'re interested in my work, please feel free to contact me for more information or a quote! You can find my contact information below.')}</p>
        </div>
      </div>
      <div className='embedcontainer'>
        <div>
          <h1 style={{ color: 'white' }}>Work History</h1>
          <WorkList parody={isParodySite}/>
        </div>
        <div>
          <h1 style={{ color: 'white' }}>Projects</h1>
          <ProjectsList parody={isParodySite}/>
          <h1 style={{ color: 'white' }}>Discord</h1>
          <div style={{ display: 'flex', 'justify-content': 'center' }}>
            <DiscordProfile discordUser={discordUser}/>
          </div>
          <h1 style={{ color: 'white' }}>Contact Information</h1>
          <div style={{ display: 'flex', 'justify-content': 'center' }}>
            <SocialsList />
          </div>
        </div>
      </div>
      <div className='footercontainer'>
        <div>
          <a target={'_blank'} href={'https://github.com/panley01/site'} style={{ color: 'white' }}><h1 style={{ color: 'white' }}>{<FaGithub />}{((isParodySite) ? '  This website is a parody!' : '  This website is OSS!')}</h1></a>
          <a target={'_blank'} href={'https://pages.cloudflare.com/'} style={{ color: 'white' }}><h2 style={{ color: 'white' }}>{<FaCloudflare />}{((isParodySite) ? '  Hi Twitter.' : '  And hosted using Cloudflare Pages')}</h2></a>
        </div>
      </div>
    </div>
  );
}

export default App;
