let candidates = [2, 3, 6, 7];
let target = 7;

function combinationSum(candidates, target) {
  const result = [];

  const backtrack = (remain, combo, start) => {
    if (remain === 0) {
      result.push([...combo]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remain) continue;

      combo.push(candidates[i]);
      backtrack(remain - candidates[i], combo, i);
      combo.pop();
    }
  };

  backtrack(target, [], 0);
  return result;
}

console.log(combinationSum(candidates, target));
