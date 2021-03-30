import { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import TimerDisplay from "./components/timerDisplay/TimerDisplay";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [onPause, setOnPause] = useState(true);

  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (onPause === false) {
          setSeconds((prevState) => prevState + 1);
        }
      });
    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [onPause, seconds]);

  const startTimer = () => {
    setOnPause(false);
  };
  const stopTimer = () => {
    setOnPause(true);
    setSeconds(0);
  };

  const resetTimer = () => {
    setOnPause(false);
    setSeconds(0);
  };
  const pauseTimer = () => {
    setOnPause(true);
  };

  return (
    <>
      <TimerDisplay
        seconds={seconds}
        startTimer={startTimer}
        stopTimer={stopTimer}
        onPause={onPause}
        resetTimer={resetTimer}
        pauseTimer={pauseTimer}
      />
    </>
  );
}

export default App;
