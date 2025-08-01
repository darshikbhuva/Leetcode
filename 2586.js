let words = ["hey", "aeo", "mu", "ooo", "artro"];
let left = 1;
let right = 4;

function vowelStrings(words, left, right) {
  let vowel = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = left; i <= right; i++) {
    if (
      vowel.includes(words[i][0]) &&
      vowel.includes(words[i][words[i].length - 1])
    ) {
      count++;
    }
  }

  return count;
}

console.log(vowelStrings(words, left, right));
