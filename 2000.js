let word = "abcdefd";
let ch = "d";

function reverse(word, ch) {
  if (!word.includes(ch)) {
    return word;
  } else {
    let index = word.indexOf(ch);
    let temp = index;

    let result = "";

    while (temp >= 0) {
      result += word[temp];
      temp--;
    }

    let s = word.slice(index + 1);
    return result + s;
  }
}

console.log(reverse(word, ch));
