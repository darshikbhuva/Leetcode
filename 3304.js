let k = 10;

function stringGame(k) {
  let res = "a";

  while (res.length < k) {
    let temp = res;
    let tempRes = "";

    for (i = 0; i < temp.length; i++) {
      let nextChar = String.fromCharCode(temp[i].charCodeAt(0) + 1);
      tempRes += nextChar;
    }

    res = temp + tempRes;
  }

  return res[k - 1];
}

console.log(stringGame(k));
