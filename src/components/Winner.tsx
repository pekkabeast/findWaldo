import React from "react";
import "../styles/Winner.css";

interface Props {
  handleRestart: (event: React.MouseEvent) => void;
}

const Winner: React.FC<Props> = ({ handleRestart }) => {
  return (
    <div className="winner">
      <h1>You Win!</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Winner;
