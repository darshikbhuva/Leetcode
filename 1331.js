let arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];

function transform(arr) {
  let sorted = [...new Set([...arr].sort((a, b) => a - b))];
  let rankMap = new Map();

  sorted.forEach((val, idx) => {
    rankMap.set(val, idx + 1);
  });

  return arr.map((val) => rankMap.get(val));
}

console.log(transform(arr));
