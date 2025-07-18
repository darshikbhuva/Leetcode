let words = ["leet", "code"];
let x = "e";

function findWord(words, x) {
  let result = [];

  words.forEach((item, i) => {
    if (item.includes(x)) {
      result.push(i);
    }
  });
  return result;
}

console.log(findWord(words, x));
