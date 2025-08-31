(fruits = [5]), (baskets = [3]);

function numOfUnplacedFruits(fruits, baskets) {
  let unplaced = 0;
  let n = fruits.length;
  let m = baskets.length;

  for (let i = 0; i < fruits.length; i++) {
    let isPlaced = false;
    for (let j = 0; j < baskets.length; j++) {
      if (fruits[i] <= baskets[j]) {
        baskets[j] = -1;
        isPlaced = true;
        break;
      }
    }
    if (!isPlaced) unplaced++;
  }

  return unplaced;
}

console.log(numOfUnplacedFruits(fruits, baskets));
