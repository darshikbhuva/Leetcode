let numerator = 1;
let denominator = 7;

function fractionToDecimal(numerator, denominator) {
  if (numerator === 0) {
    return "0";
  }

  let ans = "";

  // handle sign
  if (numerator * denominator < 0) {
    ans += "-";
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  let remainder = numerator % denominator;

  ans += String(Math.floor(numerator / denominator));
  if (remainder === 0) {
    return ans;
  }

  ans += ".";

  let map = new Map();

  while (remainder !== 0) {
    if (map.has(remainder)) {
      ans =
        ans.slice(0, map.get(remainder)) + "(" + ans.slice(map.get(remainder));
      ans += ")";
      break;
    }

    map.set(remainder, ans.length);

    remainder *= 10;
    let digit = Math.floor(remainder / denominator);

    ans += String(digit);

    remainder = remainder % denominator;
  }

  return ans;
}

console.log(fractionToDecimal(numerator, denominator));
