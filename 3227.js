let s = "ifld";

function doesAliceWin1(s) {
  let vowels = 0;
  let consonants = 0;
  let vowelArr = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < s.length; i++) {
    if (vowelArr.includes(s[i])) {
      vowels++;
    } else {
      consonants++;
    }
  }

  return vowels === 0 ? false : true;
}

function doesAliceWin2(s) {
  return [...s].some((char) => "aeiou".includes(char));
}

console.log(doesAliceWin1(s));
console.log(doesAliceWin2(s));
