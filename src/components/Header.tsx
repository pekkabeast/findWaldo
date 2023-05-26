import React from "react";
import "../styles/Header.css";
import Timer from "./Timer";
import Score from "./Score";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>findWaldo</h1>
      <Timer />
      <Score />
    </div>
  );
};

export default Header;
