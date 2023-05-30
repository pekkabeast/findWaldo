import React, { useState } from "react";
import "../styles/Gameboard.css";
import gameImage from "../assets/image1.jpg";
import CharacterMenu from "./CharacterMenu";
import { type DocumentData } from "firebase/firestore";
interface Props {
  characterList: character[];
  setCharacterList: React.Dispatch<React.SetStateAction<character[]>>;
}
interface character {
  name: string;
  map: string;
  xposition: number;
  yposition: number;
}
const Gameboard: React.FC<Props> = ({ characterList, setCharacterList }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState<number[]>([]);
  const [menuPosition, setMenuPosition] = useState<number[]>([]);

  function toggleMenu(event: React.MouseEvent): void {
    if (!showMenu) {
      setMousePosition(calcMousePosition(event));
      setMenuPosition([event.pageX, event.pageY]);
      setShowMenu(true);
    } else {
      setMousePosition([]);
      setMenuPosition([]);
      setShowMenu(false);
    }
  }

  function calcMousePosition(event: React.MouseEvent): number[] {
    const imageX = (event.target as HTMLImageElement).x;
    const imageY = (event.target as HTMLImageElement).y;

    const imageHeight = (event.target as HTMLImageElement).clientHeight;
    const imageWidth = (event.target as HTMLImageElement).clientWidth;

    const mouseX = event.clientX - imageX;
    const mouseY = event.clientY - imageY;

    return [(mouseX / imageWidth) * 100, (mouseY / imageHeight) * 100];
  }

  function handleClick(event: React.MouseEvent): void {
    setShowMenu(false);

    if (event.target != null) {
      const clickedElementId = (event.target as HTMLLIElement).id;
      setCharacterList(
        characterList.filter((character) => {
          if (
            character.name === clickedElementId &&
            mousePosition[0] > character.xposition - 0.2 &&
            mousePosition[0] < character.xposition + 0.2
          ) {
            return false;
          }
          return true;
        })
      );
    }
  }

  return (
    <div className="gameboard">
      <img src={gameImage} alt="" onClick={toggleMenu} className="gameImage" />
      {showMenu ? (
        <CharacterMenu
          characterList={characterList}
          setCharacterList={setCharacterList}
          mousePosition={mousePosition}
          menuPosition={menuPosition}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Gameboard;
