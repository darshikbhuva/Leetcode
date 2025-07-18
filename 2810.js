s = "poiinter";

function faultyKeyboard(s) {
  let ans = "";

  for (i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      ans = ans.split("").reverse().join("");
      continue;
    } else {
      ans += s[i];
    }
  }

  return ans;
}

// function finalString(s) {
//   const result = [];

//   for (const ch of s) {
//     if (ch === "i") {
//       result.reverse();
//     } else {
//       result.push(ch);
//     }
//   }

//   return result.join("");
// }

console.log(faultyKeyboard(s));
