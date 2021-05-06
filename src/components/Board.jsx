import React, { useContext } from "react";
import "../styles/components/Board.css";
import useStyle from "../hooks/useStyle";
import AppContext from "../contexts/AppContext";

const Board = () => {
  const { cellClass } = useStyle();
  const { state, putLetterIn } = useContext(AppContext);
  const { board, cellsWon } = state;

  return (
    <main className="Board">
      {board.map((row, i) => (
        <div key={i} className="Board__row">
          {row.map((cell, j) => (
            <div
              key={i + j}
              className={`Board__cell ${cellClass(cell, cellsWon[i][j])}`}
              onClick={putLetterIn(i, j)}
            >
              {cell === 0 ? "" : cell}
            </div>
          ))}
        </div>
      ))}
    </main>
  );
};

export default Board;
