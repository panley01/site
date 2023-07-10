import './App.css';
import {WorkList,ProjectsList} from './components/workList.js'
import Header from './components/header'
import Tagline from './components/taglines'
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <img style={{width: '100vw'}} src={`${process.env.PUBLIC_URL}/wave.svg`} />
      <Header />
      <div className='textcontainer'>
        <div></div>
        <div>
          <p style={{ color: 'white' }}>test text</p>
        </div>
        <div></div>
      </div>
      <div className='embedcontainer'>
        <div>
          <h1 style={{ color: 'white' }}>Work History</h1>
          <WorkList />
        </div>
        <div>
          <h1 style={{ color: 'white' }}>Projects</h1>
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}

export default App;
