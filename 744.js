(letters = ["x", "x", "y", "y"]), (target = "z");

function targetLetter(letters, target) {
  for (i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt(0) > target.charCodeAt(0)) {
      return letters[i];
    }
  }

  return letters[0];
}
function targetLetter(letters, target) {
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return letters[left % letters.length];
}

console.log(targetLetter(letters, target));
