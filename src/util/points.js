export const calculatePoints = (i, j, { board, selectedLetter, turn }) => {
  let earnedPoints = 0; 
  let n = board.length;
  let cellsWon = newMatrix()
  if(selectedLetter === "S"){
      // Verifica que los lados sean letras "O"
      let pairs = [ 
                    [[i-1, j-1], [i+1, j+1]] ,
                    [[i-1, j], [i+1, j]],
                    [[i-1, j+1], [i+1, j-1]],
                    [[i, j-1], [i, j+1]],
                  ];
      for(let [[x1, y1], [x2, y2]] of pairs ){
        if(checkDimension(n, x1, y1, x2, y2)){
          if (board[x1][y1] === "O" && board[x2][y2]==="O"){
            earnedPoints++;
            cellsWon[i][j] = cellsWon[x1][y1] = cellsWon[x2][y2] = turn
          }
        }
      }
  }
  else {
    // Verifica que la letra más alejada sea letra "O" y la más cercana sea "S"
    let pairs = [ 
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
    for(let [[x1, y1], [x2, y2]] of pairs ){
      if(checkDimension(n, x1, y1, x2, y2)){
        if (board[x1][y1] === "O" && board[x2][y2]==="S"){
          earnedPoints++;
          cellsWon[i][j] = cellsWon[x1][y1] = cellsWon[x2][y2] = turn;
        }
      }
    }
  }
  return {earnedPoints, cellsWon}

}

const checkDimension = (dim, ...nums) => {
  for (let num of nums) {
    if (num >= dim || num < 0) {
      return false;
    }
  }
  return true;
};


export const newMatrix = (dim = 6) => {
  return Array(dim)
    .fill(0)
    .map(() => Array(dim).fill(0));
};
