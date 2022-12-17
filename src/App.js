import './App.css';
import WorkList from './components/workList.js'
import Tagline from './components/header';

function App() {
  return (
    <div className="App">
      <h1 id='title'>Panley</h1>
      <WorkList />
    </div>
  );
}

export default App;