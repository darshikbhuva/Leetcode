(boxTypes = [
  [5, 10],
  [2, 5],
  [4, 7],
  [3, 9],
]),
  (truckSize = 10);

function maximumUnits(boxTypes, truckSize) {
  let total = 0;
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i++) {
    let box = boxTypes[i][0];
    let unit = boxTypes[i][1];

    if (truckSize > 0) {
      total += truckSize > box ? box * unit : truckSize * unit;
      truckSize -= box;
    }
  }

  return total;
}

console.log(maximumUnits(boxTypes, truckSize));
