let word = "aaAbcBC";

function specialChar(word) {
  let set = new Set(word);
  let count = 0;

  for (let i = 90; i >= 65; i--) {
    let upper = String.fromCharCode(i);
    let lower = upper.toLowerCase();

    if (set.has(upper) && set.has(lower)) {
      count++;
    }
  }

  return count;
}

console.log(specialChar(word));
