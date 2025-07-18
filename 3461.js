let s = "3902";

function digit(s) {
  s = s.split("").map(Number);

  function recursion(arr) {
    if (arr.length <= 2) return arr;

    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let x = (arr[i] + arr[i + 1]) % 10;
      res.push(x);
    }

    return recursion(res);
  }

  let ans = recursion(s);
  return ans[0] === ans[1];
}

console.log(digit(s));
