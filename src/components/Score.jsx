import React from "react";
import "../styles/components/Score.css"

const Score = () => {
  return (
    <aside className="Score">
      <div className="Score__content">
        <div className="Score__content__name">Computadora</div>
        <div className="Score__content__points">10</div>
      </div>
      <div className="Score__content">
        <div className="Score__content__name">Humano</div>
        <div className="Score__content__points">0</div>
      </div>
    </aside>
  );
};

export default Score;
