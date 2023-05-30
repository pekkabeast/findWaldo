import React, { useEffect, useState } from "react";

interface Props {
  timerStatus: boolean;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<Props> = ({ timerStatus, time, setTime }) => {
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (timerStatus) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [time, timerStatus]);

  return (
    <div className="timer">
      <span>{`0${Math.floor(time / 3600)}`.slice(-2)}:</span>
      <span>{`0${Math.floor(time / 60) % 60}`.slice(-2)}:</span>
      <span>{`0${time % 60}`.slice(-2)}</span>
    </div>
  );
};

export default Timer;
