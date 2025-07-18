let arr = [2, 2, 2, 3, 3];

function freq(arr) {
  let map = new Map();

  for (i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  let max = -1;
  map.forEach((key, value) => {
    if (key === value && value > max) {
      max = value;
    }
  });

  return max;
}

// Approach 2

// function findLucky(arr) {
//   const count = new Array(501).fill(0);

//   for (let num of arr) {
//       count[num]++;
//   }

//   for (let i = 500; i >= 1; i--) {
//       if (count[i] === i) {
//           return i;
//       }
//   }

//   return -1;
// }

console.log(freq(arr));
