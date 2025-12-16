(matrix = [[1]]), (target = 1);

function searchMatrix(matrix, target) {
  let row = 0;
  let n = matrix.length - 1;

  while (row <= n) {
    let i = 0;
    let j = matrix[0].length - 1;

    if (matrix[row][i] <= target && target <= matrix[row][j]) {
      while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (matrix[row][mid] === target) {
          return true;
        } else if (matrix[row][mid] < target) {
          i = mid + 1;
        } else {
          j = mid - 1;
        }
      }

      return false;
    } else {
      row++;
    }
  }

  return false;
}

console.log(searchMatrix(matrix, target));

// My current code Time Complexity : O(k + log n)
// Optimize Time Complexity should be : O(log k +log n)
