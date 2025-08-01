let num = "1234";

function balanceString(num) {
  let even = 0;
  let odd = 0;
  for (i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      even += Number(num[i]);
    } else {
      odd += Number(num[i]);
    }
  }

  console.log(odd, even);

  return odd === even;
}

console.log(balanceString(num));
