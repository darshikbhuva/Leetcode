function kthSmallest(matrix, k) {
  // all the element in first column into the minPQ
  let n = matrix[0].length;

  let heap = new MinPriorityQueue((x) => x.val);

  for (let i = 0; i < Math.min(n, k); i++) {
    heap.push({ val: matrix[i][0], row: i, col: 0 });
  }

  //one by one find the min value in PQ and increase count till k

  for (let count = 0; count < k - 1; count++) {
    const { val, row, col } = heap.pop();

    // add the next element if it is present

    if (col + 1 < n) {
      heap.push({ val: matrix[row][col + 1], row: row, col: col + 1 });
    }
  }

  return heap.pop().val;
}
