let mountain = [1, 4, 3, 8, 5];

function peaks(mountain) {
  let result = [];

  for (i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i + 1] && mountain[i] > mountain[i - 1]) {
      result.push(i);
    }
  }

  return result;
}

console.log(peaks(mountain));
