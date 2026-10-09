import { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) { // in first step it is false so the condition becomes true so it doesnt enter the useEffect function.
      return;
    } 
    intervalRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <>

      <div>
        {seconds} seconds
      </div>

      <div>
        <button onClick={handleStart}>
          Start
        </button>

        <button onClick={handlePause}>
          Pause
        </button>

        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default StopWatch;