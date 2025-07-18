let s = "abcabcbb";

function lengthOfLongestSubstring(s) {
  let i = (j = 0);
  let maxWindow = 0;
  let map = {};

  for (j = 0; j < s.length; j++) {
    if (map[s[j]] != undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;
    }

    map[s[j]] = j;
    let currSize = j - i + 1;
    maxWindow = Math.max(currSize, maxWindow);
  }

  return maxWindow;
}
