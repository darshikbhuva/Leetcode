(matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]),
  (target = 5);

function searchMatrix(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

  const m = matrix.length;
  const n = matrix[0].length;

  let r = 0;
  let c = n - 1;

  while (r < m && c >= 0) {
    const val = matrix[r][c];
    if (val === target) return true;
    if (val > target) {
      c--;
    } else {
      r++;
    }
  }

  return false;
}

// Optimize Time Complexity : O(m+n)

function searchMatrix(matrix, target) {
  let row = 0;
  let n = matrix.length - 1;

  while (row <= n) {
    let i = 0;
    let j = matrix[0].length - 1;

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
    row++;
  }

  return false;
}

// Time Complexity : O(m * long n)

function searchMatrix(matrix, target) {
  while (matrix.length > 0) {
    const row = matrix.pop();
    if (row.includes(target)) return true;
  }

  return false;
}

// Time Complexity : O(m * n)

console.log(searchMatrix(matrix, target));
