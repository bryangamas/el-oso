import React, { useContext } from "react";
import "../styles/components/Board.css";
import useStyle from "../hooks/useStyle";
import AppContext from "../contexts/AppContext";

const Board = () => {
  const { cellClass } = useStyle();
  const { state, putLetterIn } = useContext(AppContext);
  const { board } = state;

  return (
    <main className="Board">
      {board.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={i + j}
            className={`Board__cell ${cellClass(cell, i, j)}`}
            onClick={putLetterIn(i, j)}
          >
            <p>{cell === 0 ? "" : cell}</p>
          </div>
        ))
      )}
    </main>
  );
};

export default Board;
