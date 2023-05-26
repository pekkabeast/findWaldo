import React, { useState } from "react";
import "../styles/Gameboard.css";
import gameImage from "../assets/image1.jpg";
import CharacterMenu from "./CharacterMenu";
interface Props {
  handleClick: (event: React.MouseEvent) => void;
}
const Gameboard: React.FC<Props> = ({ handleClick }) => {
  const [mouseClicked, setMouseClicked] = useState<boolean>(false);
  return (
    <div className="gameboard">
      <img src={gameImage} alt="" onClick={handleClick} className="gameImage" />
      {mouseClicked ? <CharacterMenu /> : ""}
    </div>
  );
};

export default Gameboard;
