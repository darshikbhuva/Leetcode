let word = "aaAbcBC";

function specialChar(word) {
  const seen = new Set();
  const counted = new Set();
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];

    if (ch >= "A" && ch <= "Z") {
      const lower = ch.toLowerCase();

      if (!seen.has(ch) && seen.has(lower) && !counted.has(lower)) {
        count++;
        counted.add(lower);
      }
      seen.add(ch);
    } else {
      const upper = ch.toUpperCase();

      if (seen.has(upper) && counted.has(ch)) {
        count--;
        counted.delete(ch);
      }

      seen.add(ch);
    }
  }
  return count;
}

console.log(specialChar(word));
