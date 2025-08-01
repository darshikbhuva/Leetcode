let numRows = 5;

function generate(numRows) {
  let res = [[1]];

  function rec(res, temp, numRows) {
    if (res.length === numRows) {
      return res;
    }

    let arr = [];
    arr.push(1);

    for (let i = 0; i < temp.length; i++) {
      if (arr.length === temp.length) {
        arr.push(1);
      } else {
        arr.push(temp[i] + temp[i + 1]);
      }
    }

    res.push(arr);

    return rec(res, arr, numRows);
  }

  return rec(res, [1], numRows);
}

console.log(generate(numRows));
