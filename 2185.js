let words = ["leetcode", "win", "loops", "success"];
let pref = "code";

function preCount(words, pref) {
  let count = 0;
  for (item of words) {
    i = 0;
    let flag = true;

    while (i < pref.length && i < item.length) {
      if (pref[i] !== item[i]) {
        flag = false;
        break;
      }
      i++;
    }
    if (flag && i === pref.length) {
      count++;
    }
  }

  return count;
}

var prefixCount = function (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) count++;
  }
  return count;
};

console.log(preCount(words, pref));
