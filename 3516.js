let x = 2;
let y = 7;
let z = 4;

function dest(x, y, z) {
  let one = Math.abs(x - z);
  let two = Math.abs(y - z);

  if (one === two) {
    return 0;
  } else if (one < two) {
    return 1;
  } else {
    return 2;
  }
}

console.log(dest(x, y, z));
