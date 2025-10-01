let trips = [
  [3, 2, 7],
  [3, 7, 9],
  [8, 3, 9],
];
let capacity = 11;

function carPooling(trips, capacity) {
  let arr = Array(1001).fill(0);

  for (let i = 0; i < trips.length; i++) {
    let [passenger, from, to] = trips[i];

    arr[from] += passenger;
    arr[to] -= passenger;
  }

  let usedCap = 0;

  for (let i = 0; i < 1001; i++) {
    usedCap += arr[i];

    if (usedCap > capacity) {
      return false;
    }
  }

  return true;
}

console.log(carPooling(trips, capacity));
