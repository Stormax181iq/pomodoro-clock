import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faRotateRight,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

export default function Clock({ isRunning, sessionTimer, breakTimer }) {
  const [isBreakPhase, setIsBreakPhase] = useState(false);
  const audioRef = useRef();

  const currentTimer = isBreakPhase ? breakTimer : sessionTimer;

  useEffect(() => {
    if (currentTimer.time <= 0) {
      currentTimer.reset();
      setIsBreakPhase(!isBreakPhase);
      audioRef.current?.play();
    }
  }, [currentTimer, isBreakPhase]);

  function skipPhase() {
    currentTimer.reset();
    setIsBreakPhase(!isBreakPhase);
  }

  return (
    <div className="flex w-3/4 flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">{isBreakPhase ? "Break" : "Session"}</h1>
        <p className="m-1 text-6xl font-bold">
          {Math.floor(currentTimer.time / 1000 / 60)} :{" "}
          {/* Gets the biggest integer below the current minute value e.g. 24.78 = 24  */}
          {Math.round(
            60 *
              (currentTimer.time / 1000 / 60 -
                Math.floor(currentTimer.time / 1000 / 60)),
          )}
          {/* Deducts that integer value. e.g. 24.78 - 24 = 0.78 ; 
          then multiply it by 60 to get the time in readable seconds and round the result to a whole number. */}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="m-1 p-2"
          onClick={() => {
            if (isRunning) {
              currentTimer.stop();
            } else {
              currentTimer.start();
            }
          }}
        >
          <FontAwesomeIcon icon={isRunning ? faPause : faPlay} />
        </button>
        <button className="m-1 p-2" onClick={() => currentTimer.reset()}>
          <FontAwesomeIcon icon={faRotateRight} />
        </button>
        <button className="m-1 p-2" onClick={skipPhase}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
      <audio ref={audioRef} type="audio/mp3" src="/src/assets/beep.mp3"></audio>
    </div>
  );
}

Clock.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  sessionTimer: PropTypes.object.isRequired,
  breakTimer: PropTypes.object.isRequired,
};
