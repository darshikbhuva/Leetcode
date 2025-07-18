let A = [1, 2, 3];
let B = [2, 3, 1];

// function prefix(A, B) {
//   let C = [];
//   let i = 0;

//   while (i < A.length) {
//     let count = 0;
//     let nums1 = [];
//     let nums2 = [];

//     for (j = 0; j <= i; j++) {
//       nums1.push(A[j]);
//       nums2.push(B[j]);
//     }

//     let set2 = new Set(nums2);

//     for (k = 0; k <= nums1.length; k++) {
//       if (set2.has(nums1[k])) {
//         count++;
//       }
//     }

//     C.push(count);
//     i++;
//   }

//   return C;
// }

function prefix(A, B) {
  let n = A.length;
  let seen = new Set();
  let C = Array(n).fill(0);
  let commonCount = 0;
  for (let i = 0; i < n; i++) {
    if (seen.has(A[i])) commonCount++;
    else seen.add(A[i]);
    if (seen.has(B[i])) commonCount++;
    else seen.add(B[i]);
    C[i] = commonCount;
  }
  return C;
}

console.log(prefix(A, B));
