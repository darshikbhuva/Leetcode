let s = "dbvmfhnttvr";
let k = 5;

function getLucky(s, k) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let value = s.charCodeAt(i) - 96;
    sum += Math.floor(value / 10) + (value % 10);
  }

  for (let i = 1; i < k; i++) {
    let nextSum = 0;
    while (sum > 0) {
      nextSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = nextSum;
  }

  return sum;
}

console.log(getLucky(s, k));
