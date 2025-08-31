let num = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3];
let k = 516;

function addToArrayForm(num, k) {
  k = String(k).split("").map(Number);

  let i = num.length - 1;
  let j = k.length - 1;
  let parity = 0;
  let res = [];

  while (i >= 0 || j >= 0 || parity > 0) {
    let x = i >= 0 ? num[i] : 0;
    let y = j >= 0 ? k[j] : 0;
    let sum = x + y + parity;
    res.push(sum % 10);
    parity = Math.floor(sum / 10);
    i--;
    j--;
  }

  return res.reverse();
}

console.log(addToArrayForm(num, k));
