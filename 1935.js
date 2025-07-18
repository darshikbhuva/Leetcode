let text = "hello world";
let brokenLetters = "ad";

function wordType(text, brokenLetters) {
  let count = 0;
  text = text.split(" ");
  brokenLetters = brokenLetters.split("");
  for (let item of text) {
    for (var i = 0; i < brokenLetters.length; i++) {
      if (item.includes(brokenLetters[i])) {
        break;
      }
    }

    if (i === brokenLetters.length) {
      count++;
    }
  }

  return count;
}

console.log(wordType(text, brokenLetters));
