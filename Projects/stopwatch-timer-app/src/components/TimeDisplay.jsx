function TimeDisplay({ time }) {

  const hours = String(Math.floor(time / 3600)).padStart(2, "0");

  const minutes = String(
    Math.floor((time % 3600) / 60)
  ).padStart(2, "0");

  const seconds = String(
    time % 60
  ).padStart(2, "0");

  return (
    <h1 className="time-display">
      {hours}:{minutes}:{seconds}
    </h1>
  );
}

export default TimeDisplay;