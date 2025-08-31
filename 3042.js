let words = ["a", "aba", "ababa", "aa"];

function countPrefixSuffixPairs(words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++;
      }
    }
  }

  return count;
}

function isPrefixAndSuffix(str1, str2) {
  return isPrefix(str2, str1) && isSuffix(str2, str1);
}

function isPrefix(base, word) {
  if (word.length > base.length) return false;

  for (let i = 0; i < word.length; i++) {
    if (base[i] !== word[i]) return false;
  }
  return true;
}

function isSuffix(base, word) {
  if (word.length > base.length) return false;

  let offset = base.length - word.length;
  for (let i = 0; i < word.length; i++) {
    if (base[offset + i] !== word[i]) return false;
  }
  return true;
}

console.log(countPrefixSuffixPairs(words));
