import { useEffect, useState } from "react";
import { calculatePoints } from "../util/pointsUtils";
import { newMatrix } from "../util/arrayUtils";
import { DIFFICULTY, TIME_OUT_MILIS, WINNER } from "../util/constantsUtil";
import useDifficulty from "./useDifficulty";

const useStartGame = (
  boardDim = 6,
  firstTurn = 2,
  difficulty = DIFFICULTY.EASY
) => {
  const initialState = {
    board: newMatrix(boardDim),
    cellsWon: newMatrix(boardDim),
    selectedLetter: undefined,
    turn: firstTurn,
    points: { 1: 0, 2: 0 },
    lastEarnedPoints: 0,
    moves: 0,
    winner: undefined,
  };

  const [state, setState] = useState(initialState);
  const { nextComputerMove } = useDifficulty(difficulty);

  const restart = () => {
    setState(initialState);
  };

  const changeSelectedLetter = (selectedLetter) => () => {
    setState({
      ...state,
      selectedLetter,
    });
  };

  const putLetterIn =
    (i, j, selectedLetter, player = 2) =>
    () => {
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
      lastEarnedPoints: earnedPoints,
    });
  };

  useEffect(() => {
    const checkFinishGame = () => {
      let { moves } = state;
      return moves === boardDim * boardDim ? true : false;
    };

    if (checkFinishGame()) {
      let { points } = state;
      setTimeout(() => {
        let winner = WINNER.TIED_GAME;
        if (points[1] > points[2]) {
          winner = WINNER.COMPUTER;
        } else if (points[2] > points[1]) {
          winner = WINNER.HUMAN;
        }
        setState({
          ...state,
          winner,
        });
      }, TIME_OUT_MILIS);
      return;
    }

    if (state.turn === 1) {
      let { board, lastEarnedPoints } = state;
      let nextMove = nextComputerMove(board, lastEarnedPoints);
      let nextMoveAction = putLetterIn(
        nextMove.i,
        nextMove.j,
        nextMove.selectedLetter,
        1
      );
      setTimeout(nextMoveAction, TIME_OUT_MILIS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.moves]);

  return {
    state,
    changeSelectedLetter,
    putLetterIn,
    restart,
  };
};

export default useStartGame;
