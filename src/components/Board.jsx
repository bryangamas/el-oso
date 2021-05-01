import React from "react";
import '../styles/components/Board.css'

const board = [[0, 0, 'S', 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
const cellsWon = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];

const Board = () => {

  console.log(board)

  const cellClass = (cell, cellWon) => {
    switch (cellWon) {
      case '1':
        return 'Board__cell-player-1'
      case '2':
        return 'Board__cell-player-2'
    }
    if(!cell){
      return 'Board__cell-empty'
    }
    return ''
  }

  return <main className="Board">{board.map(
    (row, i) => {
      return <div className="Board__row">
        {row.map(
        (cell, j)=>{
          return <div key={i+j} className={`Board__cell ${cellClass(cell, cellsWon[i][j])}`}>
            {cell ==0 ? '' : cell}
          </div>;
        }
      )}
      </div>
    }
  )}</main>;
};

export default Board;
