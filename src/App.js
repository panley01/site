import './App.css';
import WorkList from './components/workList.js'
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <svg src={`${process.env.PUBLIC_URL}/wave.svg`}></svg>
      <Header />
      <WorkList />
    </div>
  );
}

export default App;