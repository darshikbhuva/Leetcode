let s = "ababa";

function removePalindromeSub(s) {
  if (isPalindrome(s)) {
    return 1;
  }
}

function isPalindrome(data) {
  let i = 0;
  let j = data.length - 1;

  while (i < j) {
    if (data[i] != data[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(removePalindromeSub(s));
