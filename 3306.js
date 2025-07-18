function countOfSubstrings(word, k) {
  return atleast(word, k) - atleast(word, k + 1);
}

function atleast(word, k) {
  let count = 0;
  let curConsonant = 0;
  let freq = new Array(26).fill(0);
  let left = 0,
    n = word.length;
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let right = 0; right < n; right++) {
    let ch = word[right];

    if (!vowels.has(ch)) curConsonant++; // Count consonants
    freq[ch.charCodeAt(0) - 97]++;

    while (curConsonant >= k && allVowelsPresent(freq)) {
      count += n - right;
      let c = word[left];
      if (!vowels.has(c)) curConsonant--;
      freq[c.charCodeAt(0) - 97]--;
      left++;
    }
  }
  return count;
}

function allVowelsPresent(freq) {
  return (
    freq[0] > 0 && freq[4] > 0 && freq[8] > 0 && freq[14] > 0 && freq[20] > 0
  );
}

// Example usage:
console.log(countOfSubstrings("ieaouqqieaouqq", 1));
console.log(countOfSubstrings("aeioubcdea", 2));
