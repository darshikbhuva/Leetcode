function longestPalindrome(words) {
  const map = new Map();
  let result = 0;

  for (const word of words) {
    const reversed = word[1] + word[0];

    if (map.get(reversed) > 0) {
      result += 4;
      map.set(reversed, map.get(reversed) - 1);
    } else {
      map.set(word, (map.get(word) || 0) + 1);
    }
  }

  for (const [word, count] of map.entries()) {
    if (word[0] === word[1] && count > 0) {
      result += 2;
      break;
    }
  }

  return result;
}
