let ratings = [1, 2, 2];

function candy(ratings) {
  let count = 0;
  let n = ratings.length;

  let ltr = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      ltr[i] = ltr[i - 1] + 1;
    }
  }

  let rtl = Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rtl[i] = rtl[i + 1] + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    count += Math.max(ltr[i], rtl[i]);
  }

  return count;
}

console.log(candy(ratings));

// Time complexity : O(n)
