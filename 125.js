let s = "ab@a";

function palindrome(s) {
  let result = "";

  for (i = 0; i < s.length; i++) {
    if (
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ||
      (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
      (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)
    ) {
      result += s[i].toLowerCase();
    } else {
      continue;
    }
  }

  return isPalindrome(result);

  function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
      if (str[start] === str[end]) {
        start++;
        end--;
      } else {
        return false;
      }
    }

    return true;
  }
}

console.log(palindrome(s));
