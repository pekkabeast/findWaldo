import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import {
  collection,
  query,
  where,
  getDocs,
  type QuerySnapshot,
  type DocumentData,
  doc,
} from "firebase/firestore";
import { firestore } from "./firebase.config";
import _ from "lodash";
import Winner from "./components/Winner";
import "./App.css";

interface character {
  name: string;
  map: string;
  xposition: number;
  yposition: number;
}

const App: React.FC = () => {
  const [characterList, setCharacterList] = useState<character[]>([]);

  useEffect(() => {
    handleRestart();
  }, []);

  useEffect(() => {
    if (characterList.length === 0) {
      setTimerStatus(false);
    } else {
      setTimerStatus(true);
    }
  }, [characterList]);

  const [timerStatus, setTimerStatus] = useState<boolean>(true);
  const [time, setTime] = useState(0);

  function handleRestart(): void {
    // Reset characterList and Timer
    setTime(0);
    setTimerStatus(true);
    const q = query(
      collection(firestore, "characterDB"),
      where("map", "==", "map1")
    );
    const fetchCharacters = async (): Promise<QuerySnapshot<DocumentData>> => {
      return await getDocs(q);
    };
    fetchCharacters()
      .then((QuerySnapshot) => {
        let characterArray: character[] = [];
        QuerySnapshot.forEach(
          (doc) =>
            (characterArray = [...characterArray, doc.data() as character])
        );
        return characterArray;
      })
      .then((characterArray) => {
        setCharacterList([...characterArray]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Header
        timerStatus={timerStatus}
        handleRestart={handleRestart}
        characterList={characterList}
        time={time}
        setTime={setTime}
      />
      <Gameboard
        characterList={characterList}
        setCharacterList={setCharacterList}
      />
      {characterList.length === 0 && <Winner handleRestart={handleRestart} />}
    </div>
  );
};

export default App;
