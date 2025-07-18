let s = "abcabc";

function count(s) {
  let freq = new Array(3).fill(0);
  let count = 0;
  let curCount = 0;
  let left = 0;
  let n = s.length;

  for (let right = 0; right < n; right++) {
    let ch = s[right];
    let index = ch.charCodeAt(0) - "a".charCodeAt(0);
    freq[index]++;

    if (freq[index] === 1) {
      curCount++;
    }

    while (curCount === 3) {
      count += n - right;
      let c = s[left];
      let leftIndex = c.charCodeAt(0) - "a".charCodeAt(0);
      freq[leftIndex]--;
      if (freq[leftIndex] === 0) {
        curCount--;
      }
      left++;
    }
  }

  return count;
}

console.log(count(s));
