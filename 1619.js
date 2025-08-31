let arr = [
  6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3,
  8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
];

function trimMean(arr) {
  arr.sort((a, b) => a - b);

  console.log(arr, "trimmed");
  let removeCount = Math.floor(arr.length * 0.05);
  let trimmed = arr.slice(removeCount, arr.length - removeCount);
  console.log(trimmed, "trimmed");

  let sum = trimmed.reduce((acc, val) => acc + val, 0);
  return sum / trimmed.length;
}

console.log(trimMean(arr));
