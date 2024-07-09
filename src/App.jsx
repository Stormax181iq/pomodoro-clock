import { useState, useEffect, useRef } from "react";

import useTimer from "./hooks/useTimer";
import TimeLabel from "./components/TimeLabel";
import Clock from "./components/Clock";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const sessionTimer = useTimer(sessionLength * 60 * 1000);
  const breakTimer = useTimer(breakLength * 60 * 1000);
  const isRunning = sessionTimer.isRunning || breakTimer.isRunning;

  const previousSessionLengthRef = useRef();
  const previousBreakLengthRef = useRef();

  function handleChangeSessionLength(newSessionLength) {
    setSessionLength(newSessionLength);
    sessionTimer.reset(newSessionLength * 60 * 1000);
  }

  function handleChangeBreakLength(newBreakLength) {
    setBreakLength(newBreakLength);
    breakTimer.reset(newBreakLength * 60 * 1000);
  }

  useEffect(() => {
    previousSessionLengthRef.current = sessionLength;
  }, [sessionLength]);

  useEffect(() => {
    previousBreakLengthRef.current = breakLength;
  }, [breakLength]);

  useEffect(() => {
    if (previousSessionLengthRef.current !== sessionLength) {
      sessionTimer.reset(sessionLength * 60 * 1000);
    }
  }, [sessionTimer, sessionLength]);

  useEffect(() => {
    if (previousBreakLengthRef.current !== breakLength) {
      breakTimer.reset(breakLength * 60 * 1000);
    }
  }, [breakTimer, breakLength]);

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center bg-red-400">
      <div className="flex w-1/3 flex-col items-center justify-center rounded-xl border-4 p-6">
        <h1 className="my-1 text-4xl">Pomodoro Clock</h1>
        <div className="my-4 flex w-full justify-around">
          <div>
            <TimeLabel
              title="Break"
              timeLength={breakLength}
              onChangeTime={handleChangeBreakLength}
              isDisabled={isRunning}
            />
          </div>
          <div>
            <TimeLabel
              title="Session"
              timeLength={sessionLength}
              onChangeTime={handleChangeSessionLength}
              isDisabled={isRunning}
            />
          </div>
        </div>
        <Clock
          isRunning={isRunning}
          sessionTimer={sessionTimer}
          breakTimer={breakTimer}
        />
      </div>
    </div>
  );
}

export default App;
