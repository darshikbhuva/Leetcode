let ratings = [1, 2, 2];

function candy(arr) {
  let n = arr.length;
  let ans = n;
  let i = 1;

  while (i < n) {
    if (arr[i] === arr[i - 1]) {
      i++;
      continue;
    }

    let up = 0;
    while (i < n && arr[i] > arr[i - 1]) {
      up++;
      ans += up;
      i++;
    }

    let down = 0;
    while (i < n && arr[i] < arr[i - 1]) {
      down++;
      ans += down;
      i++;
    }

    // Removing lesser value on peeks
    ans = ans - Math.min(up, down);
  }

  return ans;
}

console.log(candy(ratings));

// Time complexity : O(1)
