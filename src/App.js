import logo from './logo.svg';
import './App.css';
import workList from './components/workList';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <workList />
    </div>
  );
}

export default App;
