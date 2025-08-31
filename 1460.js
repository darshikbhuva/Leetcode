let target = [1, 2, 3, 4];
let arr = [2, 4, 1, 3];

function canBeEqual(target, arr) {
  target = target.sort((a, b) => a - b);
  arr = arr.sort((a, b) => a - b);

  return JSON.stringify(target) === JSON.stringify(arr);
}

function canBeEqual(target, arr) {
  let map = new Map();

  for (let i = 0; i < target.length; i++) {
    if (!map.has(target[i])) {
      map.set(target[i], 1);
    } else {
      map.set(target[i], map.get(target[i]) + 1);
    }
  }

  for (let num of arr) {
    if (!map.has(num) || map.get(num) === 0) {
      return false;
    }
    map.set(num, map.get(num) - 1);
  }

  return true;
}

console.log(canBeEqual(target, arr));
