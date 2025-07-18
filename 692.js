const words = ["i", "love", "leetcode", "i", "love", "coding"];
const k = 2;

function topKFrequent(words, k) {
  const freqMap = new Map();
  for (let word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  const sortedWords = Array.from(freqMap.entries()).sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });

  return sortedWords.slice(0, k).map((entry) => entry[0]);
}

console.log(topKFrequent(words, k));
