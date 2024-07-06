import { useState } from "react";

import TimeLabel from "./components/TimeLabel";
import Clock from "./components/Clock";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center bg-red-400">
      <div className="flex w-1/3 flex-col items-center justify-center rounded-xl border-4 p-6">
        <h1 className="my-1 text-4xl">Pomodoro Clock</h1>
        <div className="my-4 flex w-full justify-around">
          <div>
            <TimeLabel
              title="Break"
              timeLength={breakLength}
              setTimeLength={setBreakLength}
              isDisabled={isRunning}
            />
          </div>
          <div>
            <TimeLabel
              title="Session"
              timeLength={sessionLength}
              setTimeLength={setSessionLength}
              isDisabled={isRunning}
            />
          </div>
        </div>
        <Clock
          sessionLength={sessionLength}
          breakLength={breakLength}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
        />
      </div>
    </div>
  );
}

export default App;
