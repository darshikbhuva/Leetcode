let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function solveSudoku(board) {
  let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let val = board[r][c];
      if (val !== ".") {
        rows[r].add(val);
        cols[c].add(val);
        boxes[getBox(r, c)].add(val);
      }
    }
  }

  function getBox(r, c) {
    return Math.floor(r / 3) * 3 + Math.floor(c / 3);
  }

  function backtracking(r, c) {
    if (r === 9) return true;
    if (c === 9) return backtracking(r + 1, 0);
    if (board[r][c] !== ".") return backtracking(r, c + 1);

    for (let num = 1; num <= 9; num++) {
      let val = String(num);
      let boxIdx = getBox(r, c);

      if (!rows[r].has(val) && !cols[c].has(val) && !boxes[boxIdx].has(val)) {
        board[r][c] = val;
        rows[r].add(val);
        cols[c].add(val);
        boxes[boxIdx].add(val);

        if (backtracking(r, c + 1)) return true;

        board[r][c] = ".";
        rows[r].delete(val);
        cols[c].delete(val);
        boxes[boxIdx].delete(val);
      }
    }
    return false;
  }

  let startRow = 0,
    startCol = 0,
    found = false;
  for (let i = 0; i < 9 && !found; i++) {
    for (let j = 0; j < 9 && !found; j++) {
      if (board[i][j] === ".") {
        startRow = i;
        startCol = j;
        found = true;
      }
    }
  }

  backtracking(startRow, startCol);
  return board;
}

console.log(solveSudoku(board));
