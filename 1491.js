let salary = [1000, 2000, 3000];

function avgSalary(salary) {
  let max = Math.max(...salary);

  let maxId = salary.indexOf(max);

  salary.splice(maxId, 1);
  let min = Math.min(...salary);
  let minId = salary.indexOf(min);
  salary.splice(minId, 1);

  let sum = 0;
  let n = salary.length;
  for (i = 0; i < salary.length; i++) {
    sum += salary[i];
  }

  return sum / n;
}

// function average(salary) {
//   let total = 0;
//   let min = Infinity;
//   let max = -Infinity;

//   for (let s of salary) {
//     total += s;
//     if (s < min) min = s;
//     if (s > max) max = s;
//   }

//   total -= min + max;

//   return total / (salary.length - 2);
// }

console.log(avgSalary(salary));
