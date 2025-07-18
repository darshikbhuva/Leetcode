let x = 10;

let isPalindrome = function (x) {
  let str = x.toString();

  let start = 0;
  let end = str.length - 1;

  if (x < 0) {
    return false;
  }

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

console.log(isPalindrome(x));
