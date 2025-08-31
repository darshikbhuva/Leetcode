let s = "aab";

function partition(s) {
  let result = [];

  const backtracking = (path, remainingString) => {
    if (!remainingString.length) {
      result.push([...path]);
      return;
    }
    for (let i = 1; i <= remainingString.length; i++) {
      let choice = remainingString.substring(0, i);
      if (!isPalindrome(choice)) continue;

      path.push(choice);
      backtracking(path, remainingString.substring(i));
      path.pop();
    }
  };

  backtracking([], s);
  return result;
}

function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i++] !== s[j--]) return false;
  }

  return true;
}

console.log(partition(s));
