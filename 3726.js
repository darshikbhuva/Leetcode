let n = 1020030;

function removeZeros(n) {
  let num = String(n);
  let res = "";

  num = num.split("");

  for (let i = 0; i < num.length; i++) {
    if (num[i] !== "0") {
      res += num[i];
    }
  }

  return Number(res);
}
console.log(removeZeros(n));
