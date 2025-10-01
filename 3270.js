(num1 = 987), (num2 = 879), (num3 = 798);

function generateKey(num1, num2, num3) {
  num1 = addLeadZero(num1, []);
  num2 = addLeadZero(num2, []);
  num3 = addLeadZero(num3, []);

  let key = [];
  for (let i = 0; i < num1.length; i++) {
    key[i] = Math.min(num1[i], num2[i], num3[i]);
  }

  return Number(key.join(""));
}

function addLeadZero(num, arr) {
  num = String(num);
  if (4 - num.length > 0) {
    for (let i = 0; i < 4 - num.length; i++) {
      arr.push("0");
    }
  }
  num = num.split("");

  arr = [...arr, ...num];

  return arr;
}

console.log(generateKey(num1, num2, num3));
