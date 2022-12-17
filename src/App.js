import './App.css';
import WorkList from './components/workList.js'
import InfiniteLooper from './components/header';

function App() {
  return (
    <div className="App">
      <InfiniteLooper speed="4" direction="right">
        <div className="contentBlock contentBlock--one">Place the stuff you want to loop</div>
        <div className="contentBlock contentBlock--one">right here</div>
      </InfiniteLooper>
      <WorkList />
    </div>
  );
}

export default App;