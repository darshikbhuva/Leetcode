let num = [0, 2, 1, 5, 3, 4];

const buildArray = function (num) {
  return (num = num.map((i) => num[i]));
};

console.log(buildArray);
