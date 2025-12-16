let numOnes = 3;
let numZeros = 2;
let numNegOnes = 0;
let k = 2;

function kItemsWithMaximumSum(numNegOnes, numOnes, numZeros, k) {
  if (k <= numOnes) {
    return k;
  } else if (k <= numOnes + numZeros && k >= numOnes) {
    return numOnes;
  } else {
    let res = k - numOnes - numZeros;
    return numOnes * 1 + res * -1;
  }
}

console.log(kItemsWithMaximumSum(numNegOnes, numOnes, numZeros, k));
