function maxPower(s) {
  let maxPower = 1;
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    maxPower = Math.max(maxPower, count);
  }

  return maxPower;
}

console.log(maxPower("leetcode")); // Output: 2 ('ee')
console.log(maxPower("abbcccddddeeeeedcba")); // Output: 5 ('eeeee')
console.log(maxPower("triplepillooooow")); // Output: 5 ('ooooo')
console.log(maxPower("hooraaaaaaaaaaay")); // Output: 11 ('aaaaaaaaaaa')
console.log(maxPower("tourist")); // Output: 1 (all unique)
