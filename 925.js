(name = "saeed"), (typed = "ssaaedd");

function isLongPressedName(name, typed) {
  let left = 0;
  let right = 0;

  while (left <= name.length && right < typed.length) {
    if (left < name.length && typed[right] === name[left]) {
      right++;
      left++;
      continue;
    }

    if (typed[right] === typed[right - 1]) {
      right++;
      continue;
    }

    break;
  }

  return left === name.length && right === typed.length;
}

console.log(isLongPressedName(name, typed));
