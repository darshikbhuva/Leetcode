let n = 4;

function solveNQueens(n) {
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  let result = [];

  const backtracking = (board, row, colSet, digSet, antiDigSet) => {
    if (row === n) {
      return result.push(transformBoard(board));
    }
    for (let col = 0; col < n; col++) {
      if (
        colSet.has(col) ||
        digSet.has(row - col) ||
        antiDigSet.has(row + col)
      ) {
        continue;
      }
      board[row][col] = "Q";
      colSet.add(col);
      digSet.add(row - col);
      antiDigSet.add(row + col);
      backtracking(board, row + 1, colSet, digSet, antiDigSet);

      board[row][col] = ".";
      colSet.delete(col);
      digSet.delete(row - col);
      antiDigSet.delete(row + col);
    }
  };

  backtracking(board, 0, new Set(), new Set(), new Set());

  return result;
}

let transformBoard = (board) => {
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(""));
  }

  return newBoard;
};

console.log(solveNQueens(n));
