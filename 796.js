let s = "abcde";
let goal = "cdeab";

function rotateString(s, goal) {
  if (s.length != goal.length) {
    return false;
  }
  goal = goal + goal;

  return goal.includes(s);
}

console.log(rotateString(s, goal));
