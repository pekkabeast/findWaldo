import React from "react";

interface character {
  name: string;
  map: string;
  xposition: number;
  yposition: number;
}

interface Props {
  characterList: character[];
}

const Score: React.FC<Props> = ({ characterList }) => {
  return (
    <div className="score">Remaining Characters: {characterList.length}</div>
  );
};

export default Score;
