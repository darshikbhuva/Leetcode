let sentence =
  "onrcsnlxckptsxffbyswujpamfltvmdoxovggepknmtacrjkkorjgvgtgaiaudspnpxkwikevmjeephhiyvnoymjwjfopovscbefecnoytjxfwasabwohqujwowmakpyuuqvgfab";

function pangram(sentence) {
  if (sentence.length < 26) return false;
  let alphabitsSet = new Set();

  for (const char of sentence) {
    alphabitsSet.add(char);
    if (alphabitsSet.size === 26) return true;
  }

  return alphabitsSet.size === 26;
}

console.log(pangram(sentence));
