import { useState, useEffect } from "react";

export function useTimer(timeLength, isPaused) {
  const [remainingTime, setRemainingTime] = useState(timeLength);

  return remainingTime;
}
