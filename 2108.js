const firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindromic(word)) {
      return word;
    }
  }
  return "";
};

function isPalindromic(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
