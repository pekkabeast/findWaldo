import { type DocumentData } from "firebase/firestore";
import React, { useState } from "react";
import _ from "lodash";

interface Props {
  characterList: character[];
  setCharacterList: React.Dispatch<React.SetStateAction<character[]>>;
  mousePosition: number[];
  menuPosition: number[];
  handleClick: (event: React.MouseEvent) => void;
}

interface character {
  name: string;
  map: string;
  xposition: number;
  yposition: number;
}

const CharacterMenu: React.FC<Props> = ({
  characterList,
  setCharacterList,
  mousePosition,
  menuPosition,
  handleClick,
}) => {
  return (
    <div
      className="character-menu"
      style={{
        left: `${menuPosition[0]}px`,
        top: `${menuPosition[1]}px`,
      }}
    >
      {characterList.map((character) => {
        return (
          <li id={character.name} key={character.name} onClick={handleClick}>
            {_.startCase(character.name)}
          </li>
        );
      })}
    </div>
  );
};

export default CharacterMenu;
