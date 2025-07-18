let seats = [3, 1, 5];
let students = [2, 7, 4];

function seatsF(seats, students) {
  seats = seats.sort((a, b) => a - b);
  students = students.sort((a, b) => a - b);
  let sum = 0;

  for (i = 0; i < seats.length; i++) {
    sum += Math.abs(seats[i] - students[i]);
  }

  return sum;
}

console.log(seatsF(seats, students));
