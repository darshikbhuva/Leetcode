let nums = [1, 3, 5, 6, 8];
let target = 4;

function search(data, ele) {
  let count = 0;
  function recursion(data, ele, index) {
    if (index <= data.length - 1) {
      if (data[index] === ele) {
        return index;
      } else {
        if (data[index] < ele) {
          count = index;
          index++;
          console.log(index);
          return recursion(data, ele, index);
        } else {
          return index;
        }
      }
    } else {
      return index;
    }
  }

  let k = recursion(data, ele, 0);
  return k;
}

console.log(search(nums, target), "dd");
