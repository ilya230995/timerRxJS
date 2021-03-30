import { useState } from "react";
import s from "./BtnControllers.module.css";

function BtnControllers({
  stopTimer,
  startTimer,
  onPause,
  resetTimer,
  pauseTimer,
}) {
  const [timer, setTimer] = useState(0);
  const [prevent, setPrevent] = useState(false);

  const handleClick = () => {
    setTimer(
      setTimeout(function () {
        if (!prevent) {
          return;
        }
        setPrevent(false);
      }, 300)
    );
  };

  const handleDoubleClick = () => {
    clearTimeout(timer);
    setPrevent(true);
    pauseTimer();
  };

  return (
    <div className={s.controllers}>
      {onPause ? (
        <button className={s.btnCntr} onClick={startTimer}>
          start
        </button>
      ) : (
        <button className={s.btnCntr} onClick={stopTimer}>
          stop
        </button>
      )}
      <button className={s.btnCntr} onClick={resetTimer}>
        reset
      </button>
      <button
        className={s.btnCntr}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        wait
      </button>
    </div>
  );
}
export default BtnControllers;
