let fruits = [1, 2, 3, 2, 2];

function totalFruit(fruits) {
  let map = new Map();
  let maxLength = 0;

  let i = 0;
  let j = 0;

  while (j < fruits.length) {
    map.set(fruits[j], (map.get(fruits[j]) || 0) + 1);

    if (map.size > 2) {
      map.set(fruits[i], map.get(fruits[i]) - 1);
      if (map.get(fruits[i]) === 0) {
        map.delete(fruits[i]);
      }
      i++;
    }

    maxLength = Math.max(maxLength, j - i + 1);
    j++;
  }

  return maxLength;
}

console.log(totalFruit(fruits));
