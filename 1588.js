let arr = [1, 4, 2, 5, 3];

function oddArraySum(arr) {
  let n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    console.log(((i + 1) * (n - i)) / 2);

    let contribution = Math.ceil(((i + 1) * (n - i)) / 2);
    console.log(contribution);

    sum += arr[i] * contribution;
  }

  return sum;
}

console.log(oddArraySum(arr));
