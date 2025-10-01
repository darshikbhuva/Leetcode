let n = 3;
let time = 2;

function passThePillow(n, time) {
  let j = 1;
  let temp = 1;
  let inc = false;
  let dec = false;

  while (j <= time) {
    if (temp === n) {
      inc = false;
      dec = true;
    } else if (temp === 1) {
      inc = true;
      dec = false;
    }

    if (inc) {
      temp++;
    }

    if (dec) {
      temp--;
    }

    j++;
  }

  return temp;
}

console.log(passThePillow(n, time));
