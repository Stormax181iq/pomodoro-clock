import { useState, useEffect, useRef } from "react";

const useTimer = (initialTime = 0, interval = 1000) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  function reset() {
    setTime(initialTime);
  }

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((previousTime) => previousTime - interval);
      }, interval);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, interval, time]);

  return { time, isRunning, start, stop, reset };
};

export default useTimer;
