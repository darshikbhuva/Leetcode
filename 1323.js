let num = 9669;

function maximum69Number(num) {
  num = String(num).split("");

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "6") {
      num[i] = "9";
      break;
    } else {
      continue;
    }
  }

  return Number(num.join(""));
}

console.log(maximum69Number(num));
