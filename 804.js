let words = ["a"];
let map = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

function uniqueMorseCode(words, map) {
  let set = new Set();

  for (item of words) {
    let str = "";

    for (let i = 0; i < item.length; i++) {
      let index = item.charCodeAt(i) - "a".charCodeAt(0);

      str += map[index];
    }

    set.add(str);
  }

  return set.size;
}

var uniqueMorseRepresentations = function (words) {
  const morseCodeMap = new Map([
    ["a", ".-"],
    ["b", "-..."],
    ["c", "-.-."],
    ["d", "-.."],
    ["e", "."],
    ["f", "..-."],
    ["g", "--."],
    ["h", "...."],
    ["i", ".."],
    ["j", ".---"],
    ["k", "-.-"],
    ["l", ".-.."],
    ["m", "--"],
    ["n", "-."],
    ["o", "---"],
    ["p", ".--."],
    ["q", "--.-"],
    ["r", ".-."],
    ["s", "..."],
    ["t", "-"],
    ["u", "..-"],
    ["v", "...-"],
    ["w", ".--"],
    ["x", "-..-"],
    ["y", "-.--"],
    ["z", "--.."],
  ]);

  let morseSet = new Set();

  for (let i = 0; i < words.length; i++) {
    let morse = "";
    for (let j = 0; j < words[i].length; j++) {
      morse += morseCodeMap.get(words[i][j]);
    }
    morseSet.add(morse);
  }

  return morseSet.size;
};

console.log(uniqueMorseCode(words, map));
