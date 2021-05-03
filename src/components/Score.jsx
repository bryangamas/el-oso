import React from "react";

const Score = () => {
  return (
    <aside className="Score">
      <div className="Score-content">
        <div className="Score-content__name">Computadora</div>
        <div className="Score-content__points">10</div>
      </div>
      <div className="Score-content">
        <div className="Score-content__name">Humano</div>
        <div className="Score-content__points">0</div>
      </div>
    </aside>
  );
};

export default Score;
