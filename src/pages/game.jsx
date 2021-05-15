import React from "react";
import Score from "../components/Score";
import Board from "../components/Board";
import Buttons from "../components/Buttons";
import GameOver from "../components/modal/GameOver";
import "../styles/pages/GamePage.css";

const GamePage = () => {
  return (
    <div className="GamePage">
      <Score />
      <Board />
      <Buttons />
      <GameOver />
    </div>
  );
};

export default GamePage;
