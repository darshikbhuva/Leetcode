let s = "abcd";
let t = "abcde";

function findTheDifference(s, t) {
  let sumS = 0;
  let sumT = 0;
  for (const char of s) {
    sumS = sumS + char.charCodeAt(0);
  }
  for (const char of t) {
    sumT = sumT + char.charCodeAt(0);
  }
  return String.fromCharCode(sumT - sumS);
}

console.log(findTheDifference(s, t));
