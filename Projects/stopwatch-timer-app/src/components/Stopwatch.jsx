import { useEffect, useState } from "react";
import TimeDisplay from "./TimeDisplay";

function Stopwatch() {

  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    let timer;

    if(isRunning){

      timer = setInterval(() => {

        setTime((prevTime) => prevTime + 1);

      }, 1000);

    }

    return () => clearInterval(timer);

  }, [isRunning]);

  function startWatch(){
    setIsRunning(true);
  }

  function pauseWatch(){
    setIsRunning(false);
  }

  function resetWatch(){

    setIsRunning(false);

    setTime(0);
  }

  return (
    <div className="card">

      <h2 className="title">
        Stopwatch
      </h2>

      <TimeDisplay time={time} />

      <div className="button-group">

        <button
          className="start-btn"
          onClick={startWatch}
          disabled={isRunning}
        >
          Start
        </button>

        <button
          className="pause-btn"
          onClick={pauseWatch}
        >
          Pause
        </button>

        <button
          className="reset-btn"
          onClick={resetWatch}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default Stopwatch;