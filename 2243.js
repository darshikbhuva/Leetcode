let s = "00000000";
let k = 3;

function digitSum(s, k) {
  while (s.length > k) {
    let temp = "";
    for (let i = 0; i < s.length; i += k) {
      let tempS = s.slice(i, i + k);

      let tempSum = 0;
      for (let j = 0; j < tempS.length; j++) {
        tempSum += Number(tempS[j]);
      }

      temp += String(tempSum);
    }
    s = temp;
  }

  return s;
}

console.log(digitSum(s, k));
