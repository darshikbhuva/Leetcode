let digits = "23";

function letterCombinations(digits) {
  if (!digits.length) return [];

  const letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];

  const backtracking = (path, index) => {
    if (index === digits.length) {
      result.push(path.join(""));
      return;
    }

    const choices = letters[digits[index]];

    for (let i = 0; i < choices.length; i++) {
      path.push(choices[i]);
      backtracking(path, index + 1);
      path.pop();
    }
  };

  backtracking([], 0);

  return result;
}

console.log(letterCombinations(digits));
