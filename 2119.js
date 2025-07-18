function doubleRev(num) {
  const reversedOnce = Number(String(num).split("").reverse().join(""));
  const reversedTwice = Number(
    String(reversedOnce).split("").reverse().join("")
  );

  return reversedTwice === num;
}

const num = 526;
console.log(doubleRev(num)); // true
