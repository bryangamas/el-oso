import { useState } from "react";

const useStartGame = () => {
  const boardDim = 6;

  const initialState = {
    board: Array(boardDim)
      .fill(0)
      .map(() => Array(boardDim).fill(0)),
    cellsWon: Array(boardDim)
      .fill(0)
      .map(() => Array(boardDim).fill(0)),
    selectedLetter: undefined,
    turn: 0,
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
    console.log(i, j, board);
    if (board[i][j] === 0 && turn === 1) {
      board[i][j] = selectedLetter;
      checkEarnedPoints(i, j);
    }
  };

  const checkEarnedPoints = (i, j) => {
    let { board, turn } = state;
    let earnedPoints = 0;
    if (earnedPoints > 0) {
      turn = turn === 0 ? 1 : 0;
    }
    setState({
      ...state,
      board,
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
