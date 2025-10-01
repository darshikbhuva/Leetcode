let deck = [1, 1, 1, 2, 2, 2, 3, 3];

function deckBool(deck) {
  if (deck.length === 1) {
    return false;
  }
  let map = new Map();
  for (i = 0; i < deck.length; i++) {
    map.set(deck[i], (map.get(deck[i]) || 0) + 1);
  }

  let arr = [...map.values()];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] || arr[i] < 2) {
      return false;
    }
  }

  return true;
}

console.log(deckBool(deck));
