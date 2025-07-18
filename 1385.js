(arr1 = [4, 5, 8]), (arr2 = [10, 9, 1, 8]), (d = 2);

function distance(arr1, arr2, d) {
  let count = arr1.length;

  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (!(Math.abs(arr1[i] - arr2[j]) > d)) {
        count--;
        break;
      }
    }
  }

  return count;
}

function distance2(arr1, arr2, d) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  let count = arr1.length;

  for (i = arr1.length - 1; i >= 0; i--) {
    for (j = arr2.length - 1; j >= 0; j--) {
      if (!(Math.abs(arr1[i] - arr2[j]) > d)) {
        count--;
        break;
      }
    }
  }

  return count;
}

console.log(distance2(arr1, arr2, d));
