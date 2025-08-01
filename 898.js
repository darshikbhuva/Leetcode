let arr = [1, 2, 4];

function subarrayBitwiseORs(arr) {
  let uniqueOrValues = new Set();
  let currentOr = 0;

  for (let i = 0; i < arr.length; i++) {
    currentOr |= arr[i];
    let subarrayOr = 0;
    for (let j = i; j >= 0; j--) {
      subarrayOr |= arr[j];
      uniqueOrValues.add(subarrayOr);
      if (subarrayOr === currentOr) break;
    }
  }

  return uniqueOrValues.size;
}

console.log(subarrayBitwiseORs(arr));
