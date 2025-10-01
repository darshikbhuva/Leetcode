let s = "ababcbacadefegdehijhklij";

function partitionLabels(s) {
  let ans = [];
  let first = Array(26).fill(-1);
  let last = Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let curr = s.charCodeAt(i) - 97;

    if (first[curr] < 0) {
      first[curr] = i;
    }

    last[curr] = i;
  }

  let partStart = (partEnd = 0);

  for (let i = 0; i < s.length; i++) {
    let curr = s.charCodeAt(i) - 97;

    if (partEnd < first[curr]) {
      ans.push(partEnd - partStart + 1);
      partStart = partEnd = i;
    }

    partEnd = Math.max(partEnd, last[curr]);
  }

  //only handle last case
  if (partEnd - partStart + 1 > 0) {
    ans.push(partEnd - partStart + 1);
  }

  return ans;
}

console.log(partitionLabels(s));
