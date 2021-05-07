import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import "../styles/components/Score.css"

const Score = () => {
  const {state: {points}} = useContext(AppContext)

  return (
    <aside className="Score">
      <div className="Score__content">
        <div className="Score__content__name">Computadora</div>
        <div className="Score__content__points">{points[1]}</div>
      </div>
      <div className="Score__content">
        <div className="Score__content__name">Humano</div>
        <div className="Score__content__points">{points[2]}</div>
      </div>
    </aside>
  );
};

export default Score;
