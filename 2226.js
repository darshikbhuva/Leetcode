let candies = [5, 8, 6];
let k = 3;

function candiesCount(candies, k) {
  let low = 1;
  let high = Math.max(...candies);
  let mid;
  let max_candies = 0;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if (canAssign(mid, candies, k)) {
      max_candies = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  function canAssign(mid, candies, k) {
    let count = 0;

    for (let item of candies) {
      count += Math.floor(item / mid);
    }

    return count >= k;
  }

  return max_candies;
}

console.log(candiesCount(candies, k));
