let word = "AEiOUbc";

function validWord(word) {
  if (word.length < 3) {
    return false;
  }

  let isNumber = false;
  let isVowel = false;
  let isConsonant = false;

  for (i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 48 && word.charCodeAt(i) <= 57) {
      isNumber = true;
    } else if (
      ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(word[i])
    ) {
      isVowel = true;
    } else if (
      (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) ||
      (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90)
    ) {
      isConsonant = true;
    } else {
      return false;
    }
  }

  if (isVowel && isConsonant) {
    return true;
  } else {
    return false;
  }
}

console.log(validWord(word));
