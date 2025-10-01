let num = 430043;
let k = 2;

function divisorSubstrings(num, k) {
  num = String(num);
  let count = 0;

  for (let i = 0; i <= num.length - k; i++) {
    let temp = num;
    let tempString = temp.substring(i, i + k);
    tempString = Number(tempString);

    if (num % tempString === 0) {
      count++;
    }
  }

  return count;
}

console.log(divisorSubstrings(num, k));
