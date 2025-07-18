let nums = [7, 5, 6, 8, 3];

// function gcd(nums) {
//   let min = Math.min(...nums);
//   let max = Math.max(...nums);
//   let divisorMax = 1;

//   for (i = 1; i <= min; i++) {
//     if (min % i === 0 && max % i === 0 && i > divisorMax) {
//       divisorMax = i;
//     }
//   }

//   return divisorMax;
// }

function gcd(nums) {
  let a = Math.min(...nums);
  let b = Math.max(...nums);

  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

console.log(gcd(nums));
