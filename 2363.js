let items1 = [
  [5, 1],
  [4, 2],
  [3, 3],
  [2, 4],
  [1, 5],
];
let items2 = [
  [7, 1],
  [6, 2],
  [5, 3],
  [4, 4],
];

function mergeSimilarItems(items1, items2) {
  items1 = items1.sort((a, b) => a[0] - b[0]);
  items2 = items2.sort((a, b) => a[0] - b[0]);

  console.log(items1, "items1");
  console.log(items2, "items2");

  let i = 0;
  let j = 0;
  let res = [];

  while (i < items1.length && j < items2.length) {
    if (items1[i][0] === items2[j][0]) {
      res.push([items1[i][0], items1[i][1] + items2[j][1]]);
      i++;
      j++;
    } else if (items1[i][0] < items2[j][0]) {
      res.push(items1[i]);

      i++;
    } else {
      res.push(items2[j]);
      j++;
    }
  }

  while (i < items1.length) {
    res.push(items1[i]);
    i++;
  }

  while (j < items2.length) {
    res.push(items2[j]);
    j++;
  }

  res = res.sort((a, b) => a[0] - b[0]);

  return res;
}

console.log(mergeSimilarItems(items1, items2));
