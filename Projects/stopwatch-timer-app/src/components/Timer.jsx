import { useEffect, useState } from "react";
import TimeDisplay from "./TimeDisplay";

function Timer() {

  const [minutesInput, setMinutesInput] = useState("");

  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    let timer;

    if(isRunning && time > 0){

      timer = setInterval(() => {

        setTime((prevTime) => prevTime - 1);

      }, 1000);

    }

    if(time === 0){
      setIsRunning(false);
    }

    return () => clearInterval(timer);

  }, [isRunning, time]);

  function handleSetTimer(){

    const totalSeconds = Number(minutesInput) * 60;

    if(totalSeconds > 0){

      setTime(totalSeconds);

    }

  }

  function startTimer(){
    if(time > 0){
      setIsRunning(true);
    }
  }

  function pauseTimer(){
    setIsRunning(false);
  }

  function resetTimer(){

    setIsRunning(false);

    setTime(0);

    setMinutesInput("");
  }

  return (
    <div className="card">

      <h2 className="title">
        Timer
      </h2>

      <TimeDisplay time={time} />

      <input
        type="number"
        placeholder="Enter time in minutes"
        className="timer-input"
        value={minutesInput}
        onChange={(e) => setMinutesInput(e.target.value)}
      />

      <button
        className="set-btn"
        onClick={handleSetTimer}
      >
        Set Timer
      </button>

      {
        time === 0 && !isRunning && (
          <p className="finished-text">
            Ready to start
          </p>
        )
      }

      <div className="button-group">

        <button
          className="start-btn"
          onClick={startTimer}
          disabled={isRunning}
        >
          Start
        </button>

        <button
          className="pause-btn"
          onClick={pauseTimer}
        >
          Pause
        </button>

        <button
          className="reset-btn"
          onClick={resetTimer}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default Timer;