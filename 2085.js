(words1 = ["leetcode", "is", "amazing", "as", "is"]),
  (words2 = ["amazing", "leetcode", "is"]);

function countWord(words1, words2) {
  let count = 0;
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < words1.length; i++) {
    map1.set(words1[i], (map1.get(words1[i]) || 0) + 1);
  }

  for (let i = 0; i < words2.length; i++) {
    map2.set(words2[i], (map2.get(words2[i]) || 0) + 1);
  }

  map1.forEach((index, value) => {
    if (map2.has(value) && map2.get(value) === 1 && index === 1) {
      count++;
    }
  });

  return count;
}

console.log(countWord(words1, words2));
