import { useEffect, useState } from "react";
import { calculatePoints, evaluateMove } from "../util/pointsUtils";
import { randomItem, newMatrix } from "../util/arrayUtils";
import { WINNER } from "../util/constantsUtil";

const useStartGame = (boardDim = 6, firstTurn = 2) => {
  const initialState = {
    board: newMatrix(boardDim),
    cellsWon: newMatrix(boardDim),
    selectedLetter: undefined,
    turn: firstTurn,
    points: { 1: 0, 2: 0 },
    moves: 0,
    winner: undefined,
  };

  const [state, setState] = useState(initialState);

  const restart = () => {
    setState(initialState)
  }

  const changeSelectedLetter = (selectedLetter) => () => {
    setState({
      ...state,
      selectedLetter,
    });
  };

  const putLetterIn = (i, j, selectedLetter, player = 2) => () => {
    let { board, turn } = state;
    if (!selectedLetter) {
      selectedLetter = state.selectedLetter;
    }
    if (selectedLetter) {
      if (board[i][j] === 0 && turn === player) {
        board[i][j] = selectedLetter;
        checkEarnedPoints(i, j, selectedLetter);
      }
    }
  };

  const checkEarnedPoints = (i, j, selectedLetter) => {
    let { turn, points, moves } = state;
    let { earnedPoints, cellsWon } = calculatePoints(
      { ...state, selectedLetter },
      i,
      j
    );
    points[turn] += earnedPoints;
    if (earnedPoints === 0) {
      turn = turn === 1 ? 2 : 1;
    }
    setState({
      ...state,
      cellsWon,
      turn,
      moves: moves + 1,
    });
  };

  const computerMove = () => {
    let { board } = state;
    let possibleMoves = [];
    let randomMoves = [];
    for (let i = 0; i < boardDim; i++) {
      for (let j = 0; j < boardDim; j++) {
        if (board[i][j] === 0) {
          for (let selectedLetter of ["S", "O"]) {
            let moveValue = evaluateMove(board, i, j, selectedLetter);
            let move = {
              moveValue,
              i,
              j,
              selectedLetter,
            };
            possibleMoves.push(move);
            if (moveValue === 0) {
              randomMoves.push(move);
            }
          }
        }
      }
    }
    possibleMoves.sort((m1, m2) => m2.moveValue - m1.moveValue);
    let nextMove = possibleMoves[0];
    if (nextMove.moveValue === 0) {
      nextMove = randomItem(randomMoves);
    }
    let nextMoveAction = putLetterIn(
      nextMove.i,
      nextMove.j,
      nextMove.selectedLetter,
      1
    );
    setTimeout(nextMoveAction, 200);
  };

  useEffect(() => {
    const checkFinishGame = () => {
      let { moves } = state;
      return moves === boardDim * boardDim ? true : false;
    };

    if (checkFinishGame()) {
      let { points } = state;
      setTimeout(() => {
        setState({
          ...state,
          winner:
            points[1] > points[2]
              ? WINNER.COMPUTADORA
              : points[2] > points[1]
              ? WINNER.HUMANO
              : WINNER.EMPATE,
        });
      }, 200);
      return;
    }

    if (state.turn === 1) {
      computerMove();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.moves]);

  return {
    state,
    changeSelectedLetter,
    putLetterIn,
    restart
  };
};

export default useStartGame;
