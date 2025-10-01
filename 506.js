let score = [10, 3, 8, 9, 4];

function findRelativeRanks(score) {
  let arr = new Array(score.length).fill(0);
  let map = new Map();
  let temp = score;
  temp = temp.sort((a, b) => b - a);

  for (let i = 1; i <= temp.length; i++) {
    if (i === 1) {
      temp[i - 1] = "Gold Medal";
    } else if (i === 2) {
      temp[i - 1] = "Silver Medal";
    } else if (i === 3) {
      temp[i - 1] = "Bronze Medal";
    } else {
      temp[i - 1] = String(i);
    }
  }
  console.log(temp, "temp");

  //   for (let i = 0; i < score.length; i++) {
  //     map.set(score[i], temp[i + 1]);
  //   }

  //   for (let [val, ele] of map) {
  //     console.log(val, ele);
  //     arr[ele] = map.get(val);
  //   }

  return arr;
}

console.log(findRelativeRanks(score));
