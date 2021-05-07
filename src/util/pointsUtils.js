import { checkDimension, newMatrix } from "./arrayUtils";
import { LETTERS } from "./constantsUtil";

export const calculatePoints = ({ board, selectedLetter, turn }, i, j) => {
  let earnedPoints = 0;
  let cellsWon = newMatrix(board.length);
  let { pairs, firstItem, secondItem } = getPairsFor(i, j, selectedLetter);
  for (let [[x1, y1], [x2, y2]] of pairs) {
    if (checkDimension(board, x1, y1, x2, y2)) {
      if (board[x1][y1] === firstItem && board[x2][y2] === secondItem) {
        earnedPoints++;
        cellsWon[i][j] = cellsWon[x1][y1] = cellsWon[x2][y2] = turn;
      }
    }
  }
  return { earnedPoints, cellsWon };
};

export const evaluateMove = (board, i, j, selectedLetter) => {
  let completed = 0;
  let half = 0;
  let { pairs, firstItem, secondItem } = getPairsFor(i, j, selectedLetter);
  for (let [[x1, y1], [x2, y2]] of pairs) {
    if (checkDimension(board, x1, y1, x2, y2)) {
      let firstItemValue=0, secondItemValue=0;
      if( board[x1][y1] === firstItem ){
        firstItemValue = 2;
      }else if( board[x1][y1] === 0 ){
        firstItemValue = 1;
      }
      if( board[x2][y2] === secondItem ){
        secondItemValue = 2;
      }else if( board[x2][y2] === 0 ){
        secondItemValue = 1;
      }

      let value = firstItemValue + secondItemValue
      if(value === 3) half++
      else if(value === 4) completed++
    }
  }
  return completed > 0 ? completed + half : -half;
};

const getPairsFor = (i, j, letter) => {
  let pairs, firstItem, secondItem;
  if(letter === LETTERS.S){
    // Las letras de los alrededores deben ser "O"
    pairs = [ 
      // [["O"], ["O"]]
      [[i-1, j-1], [i+1, j+1]] ,
      [[i-1, j], [i+1, j]],
      [[i-1, j+1], [i+1, j-1]],
      [[i, j-1], [i, j+1]],
    ];
    firstItem = secondItem = LETTERS.O
  } else {    
    // La letra más alejada debe ser "O" y la más cercana, "S"
    pairs = [ 
      // [["O"], ["S"]]
      [[i-2, j-2], [i-1, j-1]] ,
      [[i-2, j], [i-1, j]],
      [[i-2, j+2], [i-1, j+1]],
      [[i, j+2], [i, j+1]],
      [[i+2, j+2], [i+1, j+1]] ,
      [[i+2, j], [i+1, j]],
      [[i+2, j-2], [i+1, j-1]],
      [[i, j-2], [i, j-1]],
    ];
    firstItem = LETTERS.O
    secondItem = LETTERS.S
  }
  return {pairs, firstItem, secondItem}
};

