arr1 = [
  2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31,
];
arr2 = [2, 42, 38, 0, 43, 21];

function sorting(arr1, arr2) {
  let result = [];
  let map = new Map();

  for (i = 0; i < arr1.length; i++) {
    map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
  }

  for (i = 0; i < arr2.length; i++) {
    let j = 0;
    while (j < map.get(arr2[i])) {
      result.push(arr2[i]);
      j++;
    }

    map.delete(arr2[i]);
  }

  let newMap = [...map.entries()].sort((a, b) => a[0] - b[0]);

  newMap.forEach((item) => {
    let j = 0;
    while (j < item[1]) {
      result.push(item[0]);
      j++;
    }
  });

  return result;
}

console.log(sorting(arr1, arr2));
