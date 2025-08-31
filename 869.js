let n = 679213508;

function reorderedPowerOf2(n) {
  let s1 = String(n).split("").sort().join("");

  for (let i = 0; i <= 29; i++) {
    let s2 = String(1 << i)
      .split("")
      .sort()
      .join("");
    if (s1 === s2) {
      return true;
    }
  }

  return false;
}

console.log(reorderedPowerOf2(n));
