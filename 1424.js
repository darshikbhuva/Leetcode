let nums = [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]];

function findDiagonalOrder(nums) {
  let tempMat = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      let key = i + j;
      if (!tempMat.has(key)) tempMat.set(key, []);

      tempMat.get(key).push(nums[i][j]);
    }
  }

  let result = [];

  for (let [val, ele] of tempMat) {
    ele = arrayReverse(ele);
    arrayTraverse(ele, result);
  }

  return result;
}

function arrayTraverse(ele, result) {
  for (let k = 0; k < ele.length; k++) {
    result.push(ele[k]);
  }
}

function arrayReverse(ele) {
  let i = 0;
  let j = ele.length - 1;

  while (i < j) {
    let temp = ele[i];
    ele[i] = ele[j];
    ele[j] = temp;
    i++;
    j--;
  }

  return ele;
}

console.log(findDiagonalOrder(nums));
