let n = 4;

function totalNQueens(n) {
  let result = new Set();
  let board = Array.from({ length: n }, () => Array(n).fill("."));
  const backtracking = (board, row, colSet, digSet, antiDig) => {
    if (row === n) {
      result.add(transformBoard(board));
    }
    for (let col = 0; col < n; col++) {
      if (colSet.has(col) || digSet.has(row - col) || antiDig.has(row + col)) {
        continue;
      }
      board[row][col] = "Q";
      colSet.add(col);
      digSet.add(row - col);
      antiDig.add(row + col);

      backtracking(board, row + 1, colSet, digSet, antiDig);

      board[row][col] = ".";
      colSet.delete(col);
      digSet.delete(row - col);
      antiDig.delete(row + col);
    }
  };
  backtracking(board, 0, new Set(), new Set(), new Set());
  return result.size;
}

let transformBoard = (board) => {
  let newBoard = [];

  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(""));
  }
  return newBoard;
};

console.log(totalNQueens(n));
