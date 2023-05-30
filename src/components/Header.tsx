import React, { useState } from "react";
import "../styles/Header.css";
import Timer from "./Timer";
import Score from "./Score";

interface Props {
  timerStatus: boolean;
  handleRestart: (event: React.MouseEvent) => void;
  characterList: character[];
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

interface character {
  name: string;
  map: string;
  xposition: number;
  yposition: number;
}

const Header: React.FC<Props> = ({
  timerStatus,
  handleRestart,
  characterList,
  time,
  setTime,
}) => {
  return (
    <div className="header">
      <h1>findWaldo</h1>
      <Timer timerStatus={timerStatus} time={time} setTime={setTime} />
      <Score characterList={characterList} />
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
};

export default Header;
