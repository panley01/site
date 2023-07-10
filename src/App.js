import './App.css';
import {WorkList,ProjectsList,SocialsList} from './components/workList.js'
import Header from './components/header'
import Tagline from './components/taglines'
import Contact from './components/contact';
import { FaGithub } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <img style={{width: '100vw'}} src={`${process.env.PUBLIC_URL}/wave.svg`} />
      <Header />
      <div className='textcontainer'>
        <div>
          <p style={{ color: 'white' }}>{'Hey there, I’m Panley! I lead a team of veteran developers with years of experience bringing apps to life on Discord! I’ve worked with all sorts of brands in collaboration with Discord to bring rich experiences to the platform. I’ve successfully worked with strategic partners for several important brand moments led by Discord. I consistently bring high quality applications to life on Discord, bringing meaningful ways for your fans to engage with your brand & convert into potential customers. I aim to make your ideas into a strong reality. Thanks to my dedicated i18n and QA teams, I can help you launch across regions bug-free. My standard stack runs on Cloudflare for infinite scalability - no downtime! If you\'re interested in my work, please feel free to contact me for more information or a quote! You can find my contact information below.'}</p>
        </div>
      </div>
      <div className='embedcontainer'>
        <div>
          <h1 style={{ color: 'white' }}>Work History</h1>
          <WorkList />
        </div>
        <div>
          <h1 style={{ color: 'white' }}>Projects</h1>
          <ProjectsList />
          <h1 style={{ color: 'white' }}>Contact Information</h1>
          <SocialsList />
        </div>
      </div>
      <div className='footercontainer'>
        <div>
          <a target={'_blank'} href={'https://github.com/panley01/site'} style={{ color: 'white' }}><h1 style={{ color: 'white' }}>{<FaGithub />}{'  This website is OSS!'}</h1></a>
        </div>
      </div>
    </div>
  );
}

export default App;
