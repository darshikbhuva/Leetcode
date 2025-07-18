let s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";

function isIncrese(s) {
  s = s.split(" ");
  let arr = [];

  for (i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i]))) {
      arr.push(parseInt(s[i]));
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (!(arr[i] < arr[i + 1])) {
      return false;
    }
  }

  return true;
}

console.log(isIncrese(s));
