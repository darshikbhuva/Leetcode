let s1 = "dx";
let s2 = "phe";
let s3 = "xie";

function findMinimumOperations(s1, s2, s3) {
  let i = (j = k = 0);

  if (s1[i] != s2[j] || s2[j] != s3[k] || s1[i] != s3[k]) {
    return -1;
  }

  while (i < s1.length || j < s2.length || k < s3.length) {
    if (s1[i] === s2[j] && s2[j] === s3[k] && s1[i] === s3[k]) {
      i++;
      j++;
      k++;
    } else {
      break;
    }
  }
  return s1.length - i + s2.length - j + s3.length - k;
}

console.log(findMinimumOperations(s1, s2, s3));
