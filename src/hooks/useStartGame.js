import { useState } from "react";
import { newMatrix, calculatePoints } from "../util/points"

const useStartGame = () => {
  const boardDim = 6;

  const initialState = {
    board: newMatrix(boardDim),
    cellsWon: newMatrix(boardDim),
    selectedLetter: undefined,
    turn: 2,
  };

  const [state, setState] = useState(initialState);

  // const startBoard = (n) => {
  //   setState({
  //     board: new Array(n).fill(new Array(n).fill(0)),
  //   });
  // };

  const changeSelectedLetter = (selectedLetter) => () => {
    setState({
      ...state,
      selectedLetter,
    });
  };

  const putLetterIn = (i, j) => () => {
    let { board, selectedLetter, turn } = state;
    if (board[i][j] === 0 && turn === 2) {
      board[i][j] = selectedLetter;
      checkEarnedPoints(i, j);
    }
  };

  const checkEarnedPoints = (i, j) => {
    let { turn } = state;
    let {earnedPoints, cellsWon} = calculatePoints(i, j, state);
    // if (earnedPoints === 0) {
    //   turn = turn === 1 ? 2 : 1;
    // }
    setState({
      ...state,
      cellsWon,
      turn,
    });
  };

  return {
    state,
    changeSelectedLetter,
    putLetterIn,
  };
};

export default useStartGame;
