import './App.css';
import WorkList from './components/workList.js'
import Tagline from './components/header';

function App() {
  return (
    <div className="App">
      <Tagline />
      <WorkList />
    </div>
  );
}

export default App;