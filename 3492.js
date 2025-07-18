let n = 2;
let w = 3;
let maxWeight = 4;

function ship(n, w, maxWeight) {
  let cap = Math.floor(maxWeight / w);
  let deck = n * n;

  if (cap <= deck) {
    return cap;
  } else {
    return deck;
  }
}

console.log(ship(n, w, maxWeight));
