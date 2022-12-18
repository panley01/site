import './App.css';
import WorkList from './components/workList.js'
import Header from './components/header'
import Tagline from './components/taglines';

function App() {
  return (
    <div className="App">
      <img style={{width: '100vw'}} src={`${process.env.PUBLIC_URL}/wave.svg`} />
      <Header />
      <Tagline />
      <WorkList />
    </div>
  );
}

export default App;