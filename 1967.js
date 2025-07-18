(patterns = ["a", "a", "a"]), (word = "ab");

function subString(patterns, word) {
  let count = 0;

  for (let item of patterns) {
    if (word.includes(item)) {
      count++;
    }
  }

  return count;
}

console.log(subString(patterns, word));
