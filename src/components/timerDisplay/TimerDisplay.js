import BtnControllers from "../btnControllers/BtnControllers";
import s from "./TimerDisplay.module.css";

export default function TimerDisplay({
  seconds,
  startTimer,
  stopTimer,
  onPause,
  resetTimer,
  pauseTimer,
}) {
  const timeDisplay = () => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const hours = `${Math.floor(seconds / 3600)}`;
    const getHours = `0${hours % 24}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className={s.timerDisplay}>
      <BtnControllers
        startTimer={startTimer}
        stopTimer={stopTimer}
        onPause={onPause}
        resetTimer={resetTimer}
        pauseTimer={pauseTimer}
      />
      <span className={s.time}>{timeDisplay()}</span>
    </div>
  );
}
