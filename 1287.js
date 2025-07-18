let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

function twentyFive(arr) {
  var i = 0;
  let n = arr.length;
  var j = 1;

  while (j < arr.length) {
    let count = 0;

    if (arr[i] === arr[j]) {
      count++;
      j++;
    } else {
      count = 0;
      i = j;
      j++;
    }
    console.log(count);

    if (count / n > 1 / 4) {
      var ans = arr[j];
      console.log(ans);

      break;
    }
  }

  return ans;
}

function findSpecialInteger(arr) {
  const n = arr.length;
  const threshold = Math.floor(n / 4);

  for (let i = 0; i < n - threshold; i++) {
    if (arr[i] === arr[i + threshold]) {
      return arr[i];
    }
  }

  return -1;
}

console.log(twentyFive(arr));
