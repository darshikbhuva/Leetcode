let words = ["|||"];
let separator = "|";

function separate(words, separator) {
  let result = [];
  for (item of words) {
    let temp = item.split(separator);
    result.push(temp);
  }

  let arr = result.flat().filter(Boolean);
  return arr;
}

function separate2(words, separator) {
  return words.join(separator).split(separator).filter(Boolean);
}

console.log(separate(words, separator));
