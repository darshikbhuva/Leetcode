let n = 9;

function strictPalindromic(n) {
  for (i = 2; i <= n - 2; i++) {
    let binary = n.toString(i);
    let result = isPalindrome(binary);

    if (!result) {
      return false;
    }
  }

  function isPalindrome(binary) {
    let i = 0;
    let j = binary.length - 1;

    while (i <= j) {
      if (binary[i] === binary[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }

    return true;
  }
}

console.log(strictPalindromic(n));
