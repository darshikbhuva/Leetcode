let s = "IceCreAm";

function reverse(s) {
  let start = 0;
  let end = s.length - 1;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let chars = s.split("");

  while (start < end) {
    if (vowels.includes(s[start]) && vowels.includes(s[end])) {
      let temp = chars[start];
      chars[start] = chars[end];
      chars[end] = temp;
      start++;
      end--;
    } else if (vowels.includes(s[start]) && !vowels.includes(s[end])) {
      end--;
    } else if (!vowels.includes(s[start]) && vowels.includes(s[end])) {
      start++;
    } else {
      start++;
      end--;
    }
  }

  return chars.join("");
}

console.log(reverse(s));
