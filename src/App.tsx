import React, { useState } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import { initializeApp } from "firebase/app";
import "./App.css";

const App: React.FC = () => {
  const [characterList, setCharacterList] = useState([]);
  const [mouseTarget, setMouseTarget] = useState([0, 0]);

  function handleClick(event: React.MouseEvent): number[] {
    const imageX = (event.target as HTMLImageElement).x;
    const imageY = (event.target as HTMLImageElement).y;

    const imageHeight = (event.target as HTMLImageElement).clientHeight;
    const imageWidth = (event.target as HTMLImageElement).clientWidth;

    const mouseX = event.clientX - imageX;
    const mouseY = event.clientY - imageY;
    console.log((mouseX / imageWidth) * 100);
    console.log((mouseY / imageHeight) * 100);
    return [(mouseX / imageWidth) * 100, (mouseY / imageHeight) * 100];
  }

  return (
    <div className="App">
      <Header />
      <Gameboard handleClick={handleClick} />
    </div>
  );
};

export default App;
