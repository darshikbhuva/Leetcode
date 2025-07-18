let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;

function candy(candies, extraCandies) {
  let maxCandy = Math.max(...candies);

  let result = [];

  for (i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandy) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(candy(candies, extraCandies));
