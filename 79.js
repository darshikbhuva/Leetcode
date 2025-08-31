let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCCED";

function exist(board, word) {
  let result = false;
  let m = board.length;
  let n = board[0].length;

  const backtracking = (x, y, nextIndex) => {
    if (nextIndex === word.length) {
      result = true;
    }

    let original = board[x][y];
    board[x][y] = "#";

    if (x < m - 1 && board[x + 1][y] === word[nextIndex]) {
      backtracking(x + 1, y, nextIndex + 1);
    }

    if (x > 0 && board[x - 1][y] === word[nextIndex]) {
      backtracking(x - 1, y, nextIndex + 1);
    }

    if (y < n - 1 && board[x][y + 1] === word[nextIndex]) {
      backtracking(x, y + 1, nextIndex + 1);
    }

    if (y > 0 && board[x][y - 1] === word[nextIndex]) {
      backtracking(x, y - 1, nextIndex + 1);
    }

    board[x][y] = original;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        backtracking(i, j, 1);
      }
    }
  }

  return result;
}

console.log(exist(board, word));
