import { randomItem } from "./arrayUtils";
import { LETTERS } from "./constantsUtil";
import { evaluateMove } from "./pointsUtils";

export const calculateComputerMove = (board, hitPercent) => {
  let possibleMoves = [];
  let randomMoves = [];
  board.forEach((row, i) => {
    row.forEach((_cell, j) => {
      LETTERS.forEach((selectedLetter) => {
        let moveValue = evaluateMove(board, i, j, selectedLetter);
        processElement(
          {
            i,
            j,
            selectedLetter,
            moveValue,
          },
          possibleMoves,
          randomMoves
        );
      });
    });
  });
  possibleMoves.sort((m1, m2) => m2.moveValue - m1.moveValue);
  let nextMove = possibleMoves[0];
  if (nextMove.moveValue === 0) {
    nextMove = randomItem(randomMoves);
  }
  return nextMove;
};

const processElement = (move, possibleMoves, randomMoves) => {
  possibleMoves.push(move);
  if (move.moveValue === 0) {
    randomMoves.push(move);
  }
};
