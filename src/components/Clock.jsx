import { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Clock({ isRunning, sessionTimer, breakTimer }) {
  const [isBreakPhase, setIsBreakPhase] = useState(false);

  const currentTimer = isBreakPhase ? breakTimer : sessionTimer;

  return (
    <>
      <div>
        <h1>{isBreakPhase ? "Break" : "Session"}</h1>
        <p>
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
      <button
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
      <button></button>
    </>
  );
}

Clock.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  sessionTimer: PropTypes.object.isRequired,
  breakTimer: PropTypes.object.isRequired,
};
