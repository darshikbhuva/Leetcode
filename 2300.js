let spells = [5, 1, 3];
let potions = [1, 2, 3, 4, 5];
let success = 7;

function successfulPairs(spells, potions, success) {
  potions = potions.sort((a, b) => a - b);
  let ans = Array(spells.length).fill(0);

  for (let k = 0; k < spells.length; k++) {
    let minVal = Math.ceil(success / spells[k]);
    let i = 0;
    let j = potions.length;

    while (i < j) {
      let mid = Math.floor((j + i) / 2);

      if (potions[mid] < minVal) {
        i = mid + 1;
      } else {
        j = mid;
      }
    }

    ans[k] = potions.length - i;
  }

  return ans;
}

console.log(successfulPairs(spells, potions, success));
