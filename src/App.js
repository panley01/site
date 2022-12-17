import './App.css';
import WorkList from './components/workList.js'
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <div><title>Hi there, I'm</title></div>
      <Header />
      <WorkList />
    </div>
  );
}

export default App;