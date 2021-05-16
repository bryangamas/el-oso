import { randomItem } from "./arrayUtils";
import { LETTERS } from "./constantsUtil";
import { evaluateMove } from "./pointsUtils";
import { randomNumber } from "./randomUtils";

export const calculateComputerMove = (board, hitPercent) => {
  let possibleMoves = [];
  let randomMoves = [];
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (!cell) {
        Object.values(LETTERS).forEach((selectedLetter) => {
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
      }
    });
  });
  possibleMoves.sort((m1, m2) => m2.moveValue - m1.moveValue);
  let nextMove = possibleMoves[0];
  let playRandomly =
    nextMove.moveValue === 0 || randomNumber(1, 100) >= hitPercent;
  if (playRandomly) {
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
