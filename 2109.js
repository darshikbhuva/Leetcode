let s = "LeetcodeHelpsMeLearn";
let spaces = [8, 13, 15];

function AddSpaces(s) {
  let result = "";
  let spaceSet = new Set(spaces);

  for (let i = 0; i < s.length; i++) {
    if (spaceSet.has(i)) {
      result += " ";
    }
    result += s[i];
  }

  return result;
}

console.log(AddSpaces(s));
