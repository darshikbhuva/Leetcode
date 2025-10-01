let tickets = [5, 1, 1, 1];
let k = 0;

function timeRequiredToBuy(tickets, k) {
  let total = 0;

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      total += Math.min(tickets[i], tickets[k]);
    } else {
      total += Math.min(tickets[i], tickets[k] - 1);
    }
  }

  return total;
}

console.log(timeRequiredToBuy(tickets, k));
