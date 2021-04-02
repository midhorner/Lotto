import Lottery from "./Lottery.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title={"Pick 4"} numBalls={4} />
    </div>
  );
}

export default App;
