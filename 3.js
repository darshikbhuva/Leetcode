let s = "abcabcbb";

function longestSubstring(s) {
  let set = new Set();
  let start = 0;
  let end = 0;
  let maxLength = 0;

  while (end < s.length) {
    if (!set.has(s[end])) {
      set.add(s[end]);
      maxLength = Math.max(maxLength, set.size);
      end++;
    } else {
      set.delete(s[start]);
      start++;
    }
  }

  return maxLength;
}

console.log(longestSubstring(s));
