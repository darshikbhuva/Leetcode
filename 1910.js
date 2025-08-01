let s = "daabcbaabcbc";
let part = "abc";

function removeOccurrences(s, part) {
  let i = 0;
  let n = part.length;
  s = s.split("");

  while (i <= s.length - n) {
    let temp = s.slice(i, i + n);
    temp = temp.join("");

    if (temp === part) {
      s.splice(i, n);
      console.log(s);

      i = 0;
    } else {
      i++;
    }
  }

  return s.join("");
}

console.log(removeOccurrences(s, part));
