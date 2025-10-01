let wordlist = ["KiTe", "kite", "hare", "Hare"];
let queries = [
  "kite",
  "Kite",
  "KiTe",
  "Hare",
  "HARE",
  "Hear",
  "hear",
  "keti",
  "keet",
  "keto",
];

function spellchecker(wordlist, queries) {
  let ans = [];
  let exactMatch = new Map();
  let caseMatch = new Map();
  let vowelMatch = new Map();

  function devowel(word) {
    return word.toLowerCase().replace(/[aeiou]/g, "*");
  }

  for (let word of wordlist) {
    exactMatch.set(word, word);

    if (!caseMatch.has(word.toLowerCase())) {
      caseMatch.set(word.toLowerCase(), word);
    }

    let key = devowel(word);
    if (!vowelMatch.has(key)) {
      vowelMatch.set(key, word);
    }
  }

  for (let query of queries) {
    if (exactMatch.has(query)) {
      ans.push(exactMatch.get(query));
    } else if (caseMatch.has(query.toLowerCase())) {
      ans.push(caseMatch.get(query.toLowerCase()));
    } else if (vowelMatch.has(devowel(query))) {
      ans.push(vowelMatch.get(devowel(query)));
    } else {
      ans.push("");
    }
  }

  return ans;
}

console.log(spellchecker(wordlist, queries));
