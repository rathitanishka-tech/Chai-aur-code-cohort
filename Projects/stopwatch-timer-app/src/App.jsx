import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import "./components/styles.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Stopwatch />
        <Timer />
      </div>
    </div>
  );
}

export default App;