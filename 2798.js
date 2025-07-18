let hours = [5, 1, 4, 2, 2];
let target = 2;

function count(hours, target) {
  return hours.filter((hour) => hour >= target).length;
}

console.log(count(hours, target));
