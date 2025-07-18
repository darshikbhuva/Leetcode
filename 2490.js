let sentence = "leetcode exercises sound delightful";

function circularSentence(sentence) {
  sentence = sentence.split(" ");

  if (sentence.length === 1) {
    if (sentence[0][sentence[0].length - 1] !== sentence[0][0]) {
      return false;
    } else {
      return true;
    }
  }

  for (i = 0; i < sentence.length - 1; i++) {
    if (sentence[i][sentence[i].length - 1] !== sentence[i + 1][0]) {
      return false;
    }
  }

  if (sentence[i][sentence[i].length - 1] !== sentence[0][0]) {
    return false;
  } else {
    return true;
  }
}

console.log(circularSentence(sentence));
