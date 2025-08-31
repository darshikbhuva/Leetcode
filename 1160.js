function countCharacters(words, chars) {
  let total = 0;
  for (let word of words) {
    let map = createMap(chars);
    if (isWordGood(word, map)) {
      total += word.length;
    }
  }

  return total;
}

function createMap(chars) {
  let map = {};
  for (let i = 0; i < chars.length; i++) {
    if (!map[chars[i]]) {
      map[chars[i]] = 0;
    }
    map[chars[i]]++;
  }

  return map;
}

function isWordGood(word, map) {
  for (let i = 0; i < word.length; i++) {
    if (!map[word[i]] || map[word[i]] == 0) {
      return false;
    }
    map[word[i]]--;
  }

  return true;
}
