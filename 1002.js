let words = ["bella", "label", "roller"];

function commonCharacter(words) {
  let res = [];

  for (let wo of words[0]) {
    if (words.every((word) => word.includes(wo))) {
      res.push(wo);
      words = words.map((word) => word.replace(wo, ""));
    }
  }

  return res;
}

console.log(commonCharacter(words));
