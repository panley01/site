import './App.css';
import WorkList from './components/workList.js'
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <div style={{'background-size': 'contain', 'background-image': `url("${process.env.PUBLIC_URL}/wave.svg")`}}></div>
      <Header />
      <WorkList />
    </div>
  );
}

export default App;