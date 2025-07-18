s = "luffy is still joyboy";

function lengthOfLastWord(s) {
  s = s.trim();

  let arr = Array.from(s.split(""));
  let count = 0;

  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === " ") {
      break;
    }
    count++;
  }

  return count;
}

function lengthOfLastWord(s) {
  let length = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
}

console.log(lengthOfLastWord(s));
