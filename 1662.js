let word1 = ["ab", "c"];
let word2 = ["a", "bc"];

function cmpString(word1, word2) {
  let string1 = "";
  let string2 = "";

  for (i = 0; i < word1.length; i++) {
    string1 += word1[i];
  }
  for (i = 0; i < word2.length; i++) {
    string2 += word2[i];
  }

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}

console.log(cmpString(word1, word2));
