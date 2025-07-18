let n = 2;
let commands = ["RIGHT", "DOWN"];

function snakeMatrix(n, commands) {
  let row = 0,
    col = 0;

  for (let cmd of commands) {
    if (cmd === "UP") row--;
    else if (cmd === "DOWN") row++;
    else if (cmd === "LEFT") col--;
    else if (cmd === "RIGHT") col++;
  }

  return row * n + col;
}

console.log(snakeMatrix(n, commands)); // Output: 3
