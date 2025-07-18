let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
let banned = ["hit"];

function mostCommonWord(paragraph, banned) {
  const bannedSet = new Set(banned.map((word) => word.toLowerCase()));
  const words = paragraph
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/);

  const wordCount = new Map();
  let maxWord = "";
  let maxCount = 0;

  for (const word of words) {
    if (!bannedSet.has(word) && word) {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
      if (wordCount.get(word) > maxCount) {
        maxCount = wordCount.get(word);
        maxWord = word;
      }
    }
  }

  return maxWord;
}

console.log(commonWord(paragraph, banned));
