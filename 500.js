words = ["Hello", "Alaska", "Dad", "Peace"];

function findWords(words) {
  const first = "qwertyuiop";
  const second = "asdfghjkl";
  const third = "zxcvbnm";
  let res = [];

  for (let i = 0; i < words.length; i++) {
    let isFirst = true;
    let isSecond = true;
    let isThird = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!first.includes(words[i][j].toLowerCase())) {
        isFirst = false;
      }
      if (!second.includes(words[i][j].toLowerCase())) {
        isSecond = false;
      }
      if (!third.includes(words[i][j].toLowerCase())) {
        isThird = false;
      }
    }
    if (isFirst || isSecond || isThird) {
      res.push(words[i]);
    }
  }

  return res;
}
