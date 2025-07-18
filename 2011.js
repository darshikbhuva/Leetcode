let num = ["--X", "x--"];
let i = 0;
let x = 0;

let operation = (num, i, x) => {
  if (i < num.length) {
    if (num[i].includes("+")) {
      x++;
    } else {
      x--;
    }
    i++;

    return operation(num, i, x);
  }

  return x;
};

console.log(operation(num, i, x));
