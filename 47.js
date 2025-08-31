let nums = [1, 1, 2];

function combinationSum3(nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);

  const backtracking = (path, choices) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < choices.length; i++) {
      if (i > 0 && choices[i] === choices[i - 1]) continue;
      path.push(choices[i]);
      backtracking(path, [...choices.slice(0, i), ...choices.slice(i + 1)]);
      path.pop();
    }
  };
  backtracking([], nums);

  return result;
}

console.log(combinationSum3(nums));
