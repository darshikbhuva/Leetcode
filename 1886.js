// ✅ Testcase 1: Already equal (no rotation needed)
let mat1 = [
  [1, 2],
  [3, 4],
];
let target1 = [
  [1, 2],
  [3, 4],
];
// Expected: true

// ✅ Testcase 2: 90° rotation
let mat2 = [
  [0, 1],
  [1, 0],
];
let target2 = [
  [1, 0],
  [0, 1],
];
// Expected: true

// ✅ Testcase 3: 180° rotation
let mat3 = [
  [1, 2],
  [3, 4],
];
let target3 = [
  [4, 3],
  [2, 1],
];
// Expected: true

// ✅ Testcase 4: 270° rotation
let mat4 = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
];
let target4 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
// Expected: true

// ✅ Testcase 5: Not possible after any rotation
let mat5 = [
  [1, 0],
  [0, 1],
];
let target5 = [
  [0, 1],
  [1, 1],
];
// Expected: false

// ✅ Testcase 6: 1x1 matrix
let mat6 = [[1]];
let target6 = [[1]];
// Expected: true

// ✅ Testcase 7: All same values
let mat7 = [
  [0, 0],
  [0, 0],
];
let target7 = [
  [0, 0],
  [0, 0],
];
// Expected: true

function findRotation(mat, target) {
  let matZero = 0;
  let matOne = 0;
  let targetZero = 0;
  let targetOne = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) matOne++;
      else matZero++;

      if (target[i][j] === 1) targetOne++;
      else targetZero++;
    }
  }

  return matZero === targetZero && matOne === targetOne;
}

console.log(findRotation(mat1, target1)); // true
console.log(findRotation(mat2, target2)); // true
console.log(findRotation(mat3, target3)); // true
console.log(findRotation(mat4, target4)); // true
console.log(findRotation(mat5, target5)); // false
console.log(findRotation(mat6, target6)); // true
console.log(findRotation(mat7, target7)); // true
