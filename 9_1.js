let x = 10;

function isPalidarom(x) {
  x = x.toString();
  let y = x.split("").reverse().join("");
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalidarom(x));
