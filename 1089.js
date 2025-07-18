let arr = [1, 2, 3];

function zeros(arr) {
  let i = 0;
  let count = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      count++;
      arr.splice(i + 1, 0, 0);
      i += 2;
    } else {
      i++;
    }
  }
  if (count > 0) {
    arr.splice(-count);
  }
}

function zeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 1;
    }
  }
}

console.log(zeros(arr));
