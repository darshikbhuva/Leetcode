function operation(blocks, k) {
  let n = blocks.length;
  let minOperations = Infinity;
  let whiteCount = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") whiteCount++;
  }

  minOperations = whiteCount;

  for (let i = k; i < n; i++) {
    if (blocks[i - k] === "W") whiteCount--;
    if (blocks[i] === "W") whiteCount++;

    minOperations = Math.min(minOperations, whiteCount);
  }

  return minOperations;
}

let blocks = "WBBWWBBWBW";
let k = 7;
console.log(operation(blocks, k));
