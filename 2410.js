let players = [1, 1, 1];
let trainers = [10];

function capacity(players, trainers) {
  players = players.sort((a, b) => a - b);
  trainers = trainers.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let count = 0;

  while (i < players.length && j < trainers.length) {
    if (players[i] <= trainers[j]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }

  return count;
}

console.log(capacity(players, trainers));
