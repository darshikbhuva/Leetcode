(word1 = "abcd"), (word2 = "pq");

function merge(word1, word2) {
  let ans = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    ans += word1[i];
    ans += word2[j];
    i++;
    j++;
  }

  while (i < word1.length) {
    ans += word1[i];
    i++;
  }

  while (j < word2.length) {
    ans += word2[j];
    j++;
  }

  return ans;
}

console.log(merge(word1, word2));
