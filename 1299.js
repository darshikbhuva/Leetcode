let arr = [400];

function formArr(arr) {
  let res = [];
  let i = 0;

  while (i < arr.length - 1) {
    arr.shift();

    let tempMax = Math.max(...arr);
    res.push(tempMax);

    i = 0;
  }
  res.push(-1);

  return res;
}

function formArr(arr) {
  let n = arr.length;
  let res = new Array(n);
  let maxFromRight = -1;

  for (let i = n - 1; i >= 0; i--) {
    res[i] = maxFromRight;
    maxFromRight = Math.max(maxFromRight, arr[i]);
  }

  return res;
}

console.log(formArr(arr));
