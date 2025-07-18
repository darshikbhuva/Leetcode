let arr = [5, 20, 66, 1314];

function count(arr) {
  let negative = 0;
  let positive = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    }
  }

  if (negative === positive) {
    count = negative;
  }

  count = Math.max(negative, positive);

  return count;
}

console.log(count(arr));

// TimeComplexity : n
