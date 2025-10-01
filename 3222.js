let x = 4;
let y = 11;

function winningPlayer(x, y) {
  let count = 0;
  while (x >= 1 && y >= 4) {
    count++;
    x--;
    y -= 4;
  }

  return count % 2 === 0 ? "Bob" : "Alice";
}

console.log(winningPlayer(x, y));
