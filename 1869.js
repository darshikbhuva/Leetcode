let s = "111000";

function segments(s) {
  let countOne = 1;
  let max1 = countOne;
  let countZero = 1;
  let max2 = countZero;
  let i = 0;
  let j = 1;

  if (s.length === 1 && s[0] === "1") {
    return true;
  }

  while (j < s.length) {
    if (s[i] === "1" && s[j] === "1") {
      countOne++;
      max1 = Math.max(max1, countOne);
    } else if (s[i] === "0" && s[j] === "0") {
      countZero++;
      max2 = Math.max(max2, countZero);
    } else {
      countOne = 1;
      countZero = 1;
    }
    j++;
    i++;
  }

  return max1 > max2;
}

// var checkZeroOnes = function(s) {
//   let maxOnes = 0;
// let maxZeros = 0;
// let currOnes = 0;
// let currZeros = 0;
// for (let char of s) {
//    if (char === '1') {
//        currOnes++;
//        currZeros = 0;
//    } else {
//        currOnes = 0;
//        currZeros++;
//    }

//    maxOnes = Math.max(currOnes, maxOnes)
//    maxZeros = Math.max(currZeros, maxZeros)
// }

// return maxOnes > maxZeros
// };

console.log(segments(s));
