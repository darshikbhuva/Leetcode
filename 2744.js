let words = ["aa", "ab"];

function maxString(words) {
  const seen = new Set();
  let count = 0;

  for (const word of words) {
    const reversed = word.split("").reverse().join("");
    if (seen.has(reversed)) {
      count++;
      seen.delete(reversed);
    } else {
      seen.add(word);
    }
  }

  return count;
}

console.log(maxString(words));
