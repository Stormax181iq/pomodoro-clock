import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Clock({
  sessionLength,
  breakLength,
  isRunning,
  setIsRunning,
}) {
  const [isBreakPhase, setIsBreakPhase] = useState(false);

  useEffect(() => {
    const in
  })

  return (
    <>
      <div>
        <h1>{isBreakPhase ? "Break" : "Session"}</h1>
      </div>
      <button onClick={() => setIsRunning(!isRunning)}>
        <FontAwesomeIcon icon={isRunning ? faPause : faPlay} />
      </button>
      <button></button>
    </>
  );
}

Clock.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  breakLength: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  setIsRunning: PropTypes.func.isRequired,
};
