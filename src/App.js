import logo from './logo.svg';
import './App.css';
import WorkList from './components/workList.js'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <WorkList />
    </div>
  );
}

export default App;
